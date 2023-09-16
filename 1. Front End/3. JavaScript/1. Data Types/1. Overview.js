/*
Variables

Var is function scoped, allowing access to that variable anywhere within the function.
let is block scoped, you can reassign the variable, but not redeclare it.
const is also block scoped, but can't reassign nor redeclare it.

Declaration - Gives an object an identifier so you can reference it later.
Assignment - Associates a value to that identifier, like storing information in it.


Scope determines where we can access our variables from. 

An easy way to think about scopes is that each level of brackets is a layer of scope. 
 An object, function, or even loops will create a new layer of scope.
 You can reach up levels of scope to get a variable, but can't reach down levels of scope.

 Layers
  - Local: Within the same scope.
  - Enclosing: Reaching up one or many levels of scope.
  - Global: Global scope.


*/

// *------------------------------*
//     ------ Assignments ------
// *------------------------------*
// Simple assignments
const Name = "Rufus";
let age = 26;

document.write(`${First_Name} is ${age} years old.`);

// Type Checking
console.log(typeof Name) // String


// Destructuring Assignment
// Taking values from arrays or properties from objects and set them as local variables.
// The position of the variable name matches the position of the value's index in the array.
// Can see more detailed examples in the data structures section.

// Arrays
// * ------------*
const Vehicles = ['Mustang', 'F-150', 'Expedition'];

// Old way
const car = Vehicles[0];
const truck = Vehicles[1];
const suv = Vehicles[2];

// New way
const [Car, Truck, SUV] = Vehicles


// Spreading Assignments
const alphabet = ["A", "B", "C", "D", "E", "F"]

// const [a, b] = alphabet;    // Destructure this array by setting a and b to the first two instances of the alphabet array. 
// const [a, , c] = alphabet;  // Skips B by putting in a blank. 
// const [a, b, c,...rest]     // Leaves the rest as is

const [a, , c, ...rest] = alphabet;
console.log(rest)

// Default Values in case the value in the array is undefined.
const foods = [undefined,'🥔','🍕']
const [waffle='🧇', potato, pizza] = foods

// Objects
// * ------------*
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


// Variable swap
// * ------------*
let value1 = "me!"
let value2 = "Flip"

[value1, value2] = [value2, value1]

// *----------------------------*
//     ------ Strings ------
// *----------------------------*
let Strings = "I'm text!";
// \ is an escape character

// Determine data type
console.log(typeof Strings);

// *---------------------------*
//     ------ Numbers ------
// *----------------------------*
let Whole_Number = 20;
let Decimal = 3.14;

// Assignment Operators
// -----------------------

// Addition: x + 2          same as x+=2
// Subtraction: x - 2       same as x-=2
// Multiplication: x * 2    same as x*=2
// Division: x / 2          same as x/=2
// Floor Division: x // 2   same as x//=2
// Exponent: x ** 2         same as **=2
// Modulus: x % 2           same as x%=2


// *--------------------------*
//     ------ Boolean ------
// *---------------------------*
let True_Statement = true;
let False_Statement = false;


// *----------------------------*
//     ------ Undefined ------
// *----------------------------*
// The variable is declared, but doesn't have a value associated with it.
// Undefined is meant to say that the reference is not existing.

let ToBeDetermined; 
let Prototype = undefined;
// Perhaps getting a variable set up that we want to use later?

// *-----------------------*
//     ------ Null ------
// *-----------------------*
// Intentional absence of a value.
// Useful for explicitly clearing the value of a variable.
// Unlike undefined where something doesn't even exist, null is value has a 
// defined reference to "nothing" and we intend to populate it with something.

let Nothing = null;
let selectedOption = null; // Nothing yet, but we expect it to be selected.

