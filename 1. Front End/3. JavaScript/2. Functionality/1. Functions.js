// * -------------------------------*
// |                                |
// |      ~~~~~ Functions ~~~~~     |
// |                                |
// * -------------------------------*
/* Functions are just a set of instructions for a program to use and eventually do or return something.

Good authors divide their books into chapters and sections; good programmers divide their programs into modules.
It's all about organizing things to make the project more manageable.

Exporting and importing functions, also known as modules, become important as a project grows since it
allows you to create encapsulated portions of code into separate files that make it easier to manage, navigate, and utilize.

There's two different ways to export: default and named. Both let you export inline or all at once by specifying a list. 

/ Inline
export const name = "Jesse";
export const age = 40;

/ Listed
export {name, age};


Default export: Can only have a single export default, usually a class. Imported with curly braces.
import message from "./message.js";

Named export: Used to export several things from a file. Imported with just the name.
import { name, age } from "./person.js";

Can import both types at once if they're from the same file.
import namedExport, { defaultExport } from "./someFile.js";

Named imports and exports can even be renamed. 
export {defaultExportName as renamedExportName}
import {defaultImportName as renamedImportName} from "./someFile.js";


Working with file paths are very important to importing files. You can either do it from a relative path or an absolute path.

Relative path syntax
./      - Relative path starting point. [Always has this]
../     - Go up one directory
/Name   - Go into a directory

*/




// Named Functions
function Greeting1(){ // No parameters
    return "Hello!";
} // Greeting1();

    const Greeting2 = () => "Hello!" // Greeting2();

function Custom_Greeting1(Name){ // One parameter
    return `Hello ${Name}`;
} // Custom_Greeting1("Felix");

    const Custom_Greeting2 = Name => `Hello ${Name}`; // Custom_Greeting2("Felix");

function Sum(First_Number, Second_Number) { //Multiple parameters 
    return First_Number + Second_Number;
} // Sum(2,2);

    const ArrowSum = (First_Number, Second_Number) => {
        return First_Number + Second_Number
    } // ArrowSum(2,2)

        const ShortArrowSum = (First_Number, Second_Number) => First_Number + Second_Number // ShortArrowSum(2,2)


// Default Parameters
const Sum = (First = 1, Second = 2) => First + Second
Sum()    // 3
Sum(3)   // 5
Sum(6,4) // 10

// Anonymous Functions
document.addEventListener("click", function(){
    console.log("I've been clicked.")
})

    document.addEventListener("click", () => console.log("I've been clicked.")) // Note you'll need to retain curly brackets for more than one like of code. 

// Immediately Invoked Function Expression (IIFE)
(function(){
    let a = 5;
    let b = 6;
    let c = doSomeMath(a,b);
    console.log(`The sum of ${a} and ${b} is: ${c}`);
})();

// *----------------------------*
//    ---- Error Handling ----
// *----------------------------*

// Example 1
// * ------------*
function Input_Greeting() {
    var Name = prompt("Please enter your name", "Name Placeholder");

    if (Name != null) {
        document.getElementById("demo").innerHTML = `Hello ${Name}! How are you today?`;
    }
}


// Example 2 - Membership
// * ------------*
var zebras = ["Khan", "Kira", "Levent"];

var input = prompt("What is your name?")

if (zebras.includes(input) == false) { console.log("You're not cool enough") }
else { console.log("Welcome to the strip crew") }

// *--------------------------*
//    ---- Higher Order ----
// *--------------------------*
// Higher order function - Functions that take in a function, called a callback function, as a parameter.
// So, A callback is a function passed as an argument to another function that runs after another function has finished.

function add(num1, num2) { return num1 + num2 }
function subtract(num1, num2) { return num1 - num2 }
function divide(num1, num2) { return num1 / num2 }
function multiply(num1, num2) { return num1 * num2 }

function calculator(num1, num2, mathOperator) {
    return mathOperator(num1, num2)
}

// *-----------------------*
//    ---- Debugging ----
// *-----------------------*

/* Quokka.JS extension
Great live logging tool in VSC for javascript.
To also work with DOM manipulation: npm install jsdom - quokka - plugin

*/


/* Chrome Console
Chrome itself has tons of tools for us to work with any project.
However, when debugging, there's a lot more than just using console.log. 

Options
  - Console.log(something) - Basic console logging
  - Console.table(someObject) - Clean output of many attributes
  - Console.dir(someObject) - Alternative way to show an object?
  - Console.time() - Starts a timer while console.timeEnd() stops and shows the duration of time
  - Console.trace("Optional message") - Shows the call stack
*/


console.log("Bland message")
console.warn("*Wags a finger at you.*")
console.error("Why did you do that?")
console.log('%c Did you know you can do custom consoles?', 'color: lightblue; background-color: darkblue; ')
console.log('%c Oh snap, it\'s JavaScript!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');



/* VS Debugging

Steps
  1. Place breakpoints in your code you want to inspect.
  2. Go to the debugging tab of VSC, press Run & Debug, and select your debugger.
  3. Inspect and debug
*/



// *-----------------------*
//    ---- Testing ----
// *-----------------------*

// *-----------------------*
//    ---- Importing ----
// *-----------------------*
