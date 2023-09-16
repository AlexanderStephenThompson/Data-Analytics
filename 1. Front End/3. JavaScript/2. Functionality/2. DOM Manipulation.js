// Just like CSS, this guides JS where to look for elements to pull info or apply alterations of some sort 
// As long as you know CSS selectors, you'll have full comprehension of the query selector.
// If you intend on using a particular element often, you should assign it to a variable so you don't have to write out so much each time. Espically useful for IDs.

// *---------------------------*
//     ------ Querying ------
// *---------------------------*
// If you're using jQuery, using $('something') will be shorter to type. Rather than memorizing
// specific DOM selectors, using jQuery syntax with standard CSS selector syntax will be easier.

// query selector requires the symbols for class (.) and ids (#) just like declaring CSS rules
let SingleItem = document.querySelector("#SingleElement") // Parent container of multiple items returns an array.
let MultipleItems = document.querySelectorAll(".MultipleElements") 

// Attribute specific selectors don't need . or #
let someClass = document.getElementsByClassName("SomeClass")
let someID = document.getElementById("SomeID")

// Tags
let h1Headings = document.getElementsByTagName("h1") // Grabs all h1s and lists them out as an array

// Parent Nodes
SingleItem.parentNode

// Sibling Nodes
SingleItem.previousElementSibling
SingleItem.nextElementSibling

// Child Nodes
MultipleItems.children //Outputs an array.
MultipleItems.children[0] // Selects a specific item of the array. Then you'd append .innerHTML at the end to grab its contents.
MultipleItems.firstElementChild 
MultipleItems.lastElementChild

// *-----------------------*
//     ------ Core ------
// *-----------------------*
//Creation
var newParagraph = document.createElement("p"); 

// Append
parentContainer.appendChild(newParagraph) 

// Populate
newParagraph.innerText = "Hello!"        // $("$someElement").text("Hello!")
newParagraph.innerHTML = "<b>Hello!</b>" // $("$someElement").html("<b>Hello!</b>")

// Remove
newParagraph.remove() 


// *---------------------------*
//     ------ Alteration ------
// *---------------------------*
/* You can select a single element, or loop through an array of elements and perform some alteration upon each instance. 

Single Example
    box.classList.toggle('someClass')

Multiple Example
    const boxes = document.querySelectorAll('.box')

    boxes.forEach(box => {
        box.classList.toggle('someClass')
    });
*/

// Content
SingleItem.replaceChild
SingleItem.insertBefore
SingleItem.insertAdjacentElement 

// Tag Attributes - id/class, title, src, and so on.
SingleItem.attributes 
SingleItem.hasAttribute("Attribute")
SingleItem.getAttribute("Attribute") 
SingleItem.setAttribute("AttributeName", "AttributeValue") 
SingleItem.removeAttribute("Attribute") 

// Classes
SingleItem.classList // Lists out all the classes as an array -- very handy! Can select with standard [] 
SingleItem.classList.add("NewClass")                    // $("$someElement").addClass("NewClass")
SingleItem.classList.remove("OldClass")                 // $("$someElement").removeClass("NewClass")
SingleItem.classList.replace("OldClass", "NewClass")    // $("$someElement").replaceClass("OldClass", "NewClass")
SingleItem.classList.toggle("TemporaryClass")           // $("$someElement").toggleClass("TemporaryClass")
SingleItem.classList.contains("someClass")              // $("$someElement").hasClass("someClass")

// Styling - Use a mix of css variables too. Can omit assignment to retrieve values instead. 
SingleItem.style.color = "blue";            // $("$someElement").css("color", "blue");
SingleItem.style.marginBottom = "1rem"      // $("$someElement").css("marginBottom", "1rem");
SingleItem.style.display = "inline-block"   // $("$someElement").css("display", "inline-block");

// Actions
Checkbox.click() // Checks a checkbox as if we clicked on it. But can work for buttons and other elements.

// Events
SingleItem.addEventListener("EventName", FunctionName) // Don't add the () to the function or it'll be executed as soon as the page loads rather than when the event is triggered.