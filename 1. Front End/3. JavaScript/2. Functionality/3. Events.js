// * ----------------------------*
// |                             |
// |      ~~~~~ Events ~~~~~     |
// |                             |
// * ----------------------------*
/* Events are just actions a user can perform while interacting
with the UI of a website. What we do with events is apply listeners
to look out for specific types of events and assign some sort of 
corresponding functionality, the handler, when the event occurs. 
Note we can apply more than one listener at a time.

Event listener - Some sort of user action like click, hover, etc. 
Event handler - What action will be performed when the listener is triggered.

Event types: Mouse, keyboard, touch, hover, and so many more.

When an event occurs, you can also capture the object associated with it,
getting all details related to that event. Then you can use that
data for all sorts of things like conditionals or dynamic variables.
*/

// * ---------------------------*
//     ------ Triggering ------
// * ---------------------------*

// Though HTML attributes
<button onclick="this.innerHTML=Date()">The time is?</button>

// Though DOM manipulation
function respondToClick() { alert("I got clicked!") }

someElement.addEventListener("click", respondToClick) // With standard function
someElement.addEventListener("click", () => { alert("I got clicked!") }) // With built-in anonymous function


// * -------------------------------*
//     ------ Event Objects ------
// * -------------------------------*
/* https://www.youtube.com/watch?v=_BVkOvpyRI0

If we want to use meta data about the event itself, we can use the event object.

When an event occurs, you can also capture the object associated with it,
getting all details related to that event. Then you can use that
data for all sorts of things like conditionals or dynamic variables.

When creating an event handler, you can pass in some variable that will 
represent the event object. 

Log the event object to get a full list of event details you can pull from.
*/

someElement.addEventListener("click", (event) =>{
    alert(`It is ${event.shiftKey} that the shift key was held while this happened`)

    if (event.ctrlKey){
        console.log("The CTRL key was held while this happened")
    }
})
