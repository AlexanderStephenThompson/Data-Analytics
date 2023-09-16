// * ---------------------------*
// |                            |
// |      ~~~~~ Title ~~~~~     |
// |                            |
// * ---------------------------*

// * --------------------------*
//     ------ Header 1 ------
// * --------------------------*

// * ----------------*
//     - Header 2 -
// * ----------------*

// Header 3
// * ------------*


// * -----------------------------*
// |                              |
// |      ~~~~~ Objects ~~~~~     |
// |                              |
// * -----------------------------*
/* 
Javascript is different where it treats an object as a data structure, specifically a dictionary.
Objects can hold functionality too, but that will be implemented with classes. For now, we just
view objects as a dictionary data structure. 

As with most object oriented programming languages, everything is an object. Everything. 
Which seems confusing and very abstract-- and it is! Though what's incredibly helpful to 
know is what data structure the object is represented as. Once you know  which structure it is and how
to traverse it, we now have the chance to use data structure methods to get values and work with them.
The same goes for any built in functionality associated. When we know that, we know how to work with and  
utilize the functionality something may have, just like as if we were making our own objects.

Other objects in Javascript: Events, errors, ...?

*/

// * --------------------------*
//     ------ Syntax ------
// * --------------------------*
// Behave just like dictionaries/associative arrays. The values are written as name:value pairs

let Object ={
  key1: "Value 1",
  key2: "Value 2",
  key3: "Value 3",
}


// * ---------------------------------*
//     - Single-dimensional Object -
// * ---------------------------------*

let Rufus = {
  Name: "Rufus",
  Species: "Kangaroo",
  Gender: "Male",
  FavoriteFoods: ["Pad Thai", "Shells & Cheese", "Pizza", "Curry"]
}


console.log(Rufus.Name)     // Dot notation
console.log(Rufus["Name"])  // Bracket notation. Can put variables in place of hardcoded values. 
console.log(`${Rufus.Name} is a ${Rufus.Species}`)

Rufus.Height = 6 // Adding a height attribute to the object
Delete.Rufus.Height // Removing the height attribute from the object

// * ---------------------------------*
//     - Multi-dimensional Object -
// * ---------------------------------*

BackpackInventory = {

  Sword: {
    Name: "Destroyer",
    Value: 10,
    Description: "It stabs"
  },

  Potion: {
    Name: "Health",
    Value: 25,
    Description: "It heals"
  }
}
console.log(BackpackInventory.Sword.Value)


// * ------------*
//     - This -
// * ------------*
// The this keyword refers to the object that is executing the current function, most commonly either 
// a JavaScript data structure object or an HTML object that had a function run after some event, like onClick. 

// Using this with JavaScript objects is usually to pull out attributes of that object
let Fiona = {
  Name: "Fiona",
  Species: "Otter",
  Gender: "Female",
  introduceSelf(){
    console.log(`Hi, my name is ${this.Name} and I'm a ${this.Species}!`)
  }
}

Fiona.introduceSelf()

// Using this with a HTML object lets you get attributes of that HTML object through standard DOM manipulation
// <p class="lots of classes" data-custom="Fancy custom data~!" onclick="Describe(this)">Click me!</p>

function Describe(HTML_Object){

  console.log(HTML_Object.innerHTML)                   // Fetches content of the p tag ["Click me!"]
  console.log(HTML_Object.classList.length)            // Returns the number of classes this HTML object has [3]
  console.table(HTML_Object.classList)                 // Shows a table of the classes. [lots of classes]
  console.log(HTML_Object.getAttribute('data-custom')) // Returns whatever custom data we applied to that HTML element [Fancy custom data~!]

  HTML_Object.innerHTML = "I've been clicked!"         // Alter its content, just like with DOM manipulation. 
}


// * -----------------------------*
//     - Object Destructuring  -
// * -----------------------------*
// Destructing assignment lets us take properties from an object and set them as local variables. 
// Used to get property values of objects. 

const RufusObject = {
  firstName: "Rufus",
  gender: "male",
  species: undefined
}

// Old way
// const firstName = RufusObject.firstName
// const gender = RufusObject.gender
// const species = RufusObject.species

// New way
RufusObject.firstName = "Roo" // Giving a nickname
let { firstName: characterName, gender, species = "🦘" } = RufusObject;// Must match the same value of the, even if you rename the attribute with oldAttributeName:newAttributeName
characterName = "Rufus" // Changing it back
console.log(`${characterName} is a ${gender} ${species}`)




// * -----------------------*
//     - Useful Methods  -
// * -----------------------*

// Optional Chaining
// * ------------------*
/*
Shorthand way to safely check if whatever after the question mark is
present in an object. If whatever was specified does not exist, it will 
just return undefined instead of throwing an error.

Syntax
  object?.attribute
  object?.[expression]
  object?.function()

*/

let Levent = {
  Name: "Levent",
  Species: "Zebra",
  Gender: "Male",
  existingMethod(){alert("I am zebra!")}
}

console.log(Levent?.Species) // Returns "Zebra" since Levent.Species is "Zebra"
console.log(Levent?.Height) // Returns undefined since property does not exist

Levent.existingMethod?.()    // I am zebra!
Levent.nonExistingMethod?.() // Nothing, no such method.
