const express = require("express");
const router = express.Router();

const members = require("../../Members.js");

//*-------------------------*//
//         GET Methods
//*-------------------------*//

// Route to get all members
router.get("/", (req, res) => {
    res.json(members);
});

// Route to get a single member
router.get("/:id", (req, res) => {

    // Find the member with the given id
    const found = members.some((member) => member.id === parseInt(req.params.id));

    // If the member is found, return it. Otherwise, return 404
    if (found) {
        const member = members.filter((member) => member.id === parseInt(req.params.id));
        res.status(200).json(member);
    }
    else {
        res.status(404).json({ msg: `Member ${req.params.id} not found` });
    }
});

//*-------------------------*//
//        POST Methods
//*-------------------------*//
router.post("/", (req, res) => {

    const newMember = {
        id: members.length + 1,
        name: req.body.name,
        email: req.body.email,
        status: "active"
    };

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: "Please include a name and email" });
    }
    else {
        members.push(newMember);
        res.json(members);
    }
});

//*-------------------------*//
//        PUT Methods
//*-------------------------*//
router.put("/:id", (req, res) => {

    // Find the member with the given id
    const found = members.some((member) => member.id === parseInt(req.params.id));

    // If the member is found, return it. Otherwise, return 404
    if (found) {
        const member = req.body;

        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = req.body.name ? req.body.name : member.name;
                member.email = req.body.email ? req.body.email : member.email;

                res.json({ msg: "Member updated", member });
            }
        });
        res.status(200).json(member);
    }
    else {
        res.status(404).json({ msg: `Member ${req.params.id} not found` });
    }
});

//*-------------------------*//
//       DELETE Methods
//*-------------------------*//
router.delete("/:id", (req, res) => {

    // Find the member with the given id
    const found = members.some((member) => member.id === parseInt(req.params.id));

    // If the member is found, return it. Otherwise, return 404
    if (found) {
        res.status(200).json({
            msg: "Member deleted",
            members: members.filter((member) => member.id !== parseInt(req.params.id)) // Fake deletion through filtering.
        });

    }
    else {
        res.status(404).json({ msg: `Member ${req.params.id} not found` });
    }
});

module.exports = router;