// Create Server
const express = require('express')      // Name we wrote in terminal to download this. 
const path = require('path')            // NodeJS default
const members = require('./Members');   // Selecting specifically the members array

const app = express()

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{ console.log(`Sever listening on port ${PORT}!`)})

// Static Folder - The .app method is how we can use middleware
app.use(express.static(path.join(__dirname, "public")))

// Get Requests
// app.get('/', (req, res) => {res.send('<h1>Hello!</h1>')})                                                    // Simple response
// app.get('/', (request, response)=>{response.sendFile(__dirname + "/fileName.html")})                         // Sending a file within the same folder
// app.get('/', (request, response)=>{response.sendFile(path.join(__dirname, "folderName", "fileName.html"))})  // Sending a file within a different folder
app.get('/api/members', (request, response) => response.json(members))                                          // Fetches the whole array
app.get('/api/members/:id', (request, response) => { response.json(members.filter(member => member.id === parseInt(req.params.id)))}) // Fetches a single item an array?

// Middleware
const logger = (request, response, next) => {
    console.log(`${request.protocol}://${request.get('host')}${request.orginalUrl}`)
    next()
}
app.use(logger)