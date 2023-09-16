// * ---------------------------------*
// |                                  |
// |      ~~~~~Conditionals ~~~~~     |
// |                                  |
// * ---------------------------------*



// * ------------------------*
//    ------ If/Else ------
// * ------------------------*

if (condition1) {
    //  block of code to be executed if condition1 is true
}
else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
}
else {
    //  block of code to be executed if both condition1 and condition2 are false
}

// You can state more than one condition with && (and) or || (or).
if (condition1 && condition2){
    //  block of code to be executed if condition1 is true and condition2 is true
}

if (condition1 || condition2){
    //  block of code to be executed if both condition1 or condition2 is true

}


function Timed_Greeting() {
    var Greeting;
    var Hour = new Date().getHours();

    if (Hour < 10) { Greeting = "Good morning"; }
    else if (Hour < 20) { Greeting = "Good day"; }
    else { Greeting = "Good evening"; }

    document.getElementById("demo").innerHTML = Greeting;
}

// Fake love
let result = Math.ceil(Math.random() * 100);

console.log(`Your score is: ${result}`)

if (result > 90) { console.log("Wow, what a great match!") } // 90-100
else if (result >= 50 && result <= 90) { console.log("You may have a chance") }    // 50 - 90
else { console.log("Good luck.") }               //  0 - 49

// Leap year
function isLeap(year) {

    if (year % 4 !== 0) { console.log("Not leap year") }
    if (year % 100 === 0 && year % 400 === 0) { console.log("Leap year."); }
    if (year % 100 === 0) { console.log("Not leap year.") }
    if (year % 4 === 0) { console.log("Leap year.") }

}

// Fizz buzz
var output = [];
var number = 1

function fizzBuzz() {

    if (number % 3 == 0 && number % 5 == 0) { output.push("Fizzbuzz"); }
    else if (number % 3 == 0) { output.push("Fizz"); }
    else if (number % 5 == 0) { output.push("Buzz"); }
    else { output.push(number); }

    console.log(output)
    number++;
}

// Managing Nesting w/ Guard Clauses
// * --------------------------------*

// Bad example
function badWifiLogin(){
    if(wifi){
        if(login){
            if(admin){
                viewAdminPanel()
            } else{console.log("Must be an admin")}
        } else{console.log("Must be logged in")}
    } else{console.log("Must be connected to wifi.")}
}

// Good Example, refactoring with guard clauses. 
function goodWifiLogin(){

    if(!wifi) {console.log("Must be connected to wifi")}

    if(!login){console.log("Must be logged in")}

    if(!admin){console.log("Must be an admin")}

    seeAdminPanel();
}


// Okay example
function toAccountingFormat(number){

    if(number != null){
        if (number < 0){return `(${Math.abs(number)})`}
        else{return number.toString()}
    }
}

// Better example
function toAccountingFormat(number){

    if(number == null) return
    if (number < 0) result`(${Math.abs(number)})`
    return number.toString()
}

// * -----------------------*
//    ------ Switch ------
// * -----------------------*

switch (new Date().getDay()) { // Works great with .this too.
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

// Object alternative
const days ={
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}

console.log(days[3])


// * ------------------------*
//    ------ Ternary ------
// * ------------------------*
// Ternary Operator
// conditionToCheck ? instructionsIfTrue : instructionsIfFalse

// Example 1
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice"
console.log(beverage); // "Beer"

// Example 2 - Chaining
let employeeName = "Kira"

let salary = employeeName === "Rufus" ? 100 :
             employeeName === "Kira" ? 200 :
             employeeName === "Khan" ? 300 :
             0;

console.log(salary)

// Example 3 - With function
function checkWinner(win){
    win ? console.log("You win!") : console.log("You Lost")
}
checkWinner(true)


// * ------------------------------------*
//    ------ Logical Assignments ------
// * ------------------------------------*
/*
Reassigns a value to something else depending if its value is truthy, falsy, or nullish. The
most common use cases is to check if some value is falsy or nullish and give it some alternative 
or fallback value if we want to operate on it. That way we don't get errors while working with falsy
or nullish values -- especially nullish ones. 

 Types
   && - Truthy (Anything not falsy or nullish.)
   || - Falsy (False, 0, null, undefined, "", NAN, and empty containers [Essentially covers falsy and null values])
   ?? - Nullish (Null, undefined, "", and any empty object or data structure [Just covers nullish values])
*/

// Truthy reassignment
// * ------------------*
// && (Truthy reassignment) Will perform an assignment if the object in question is truthy, otherwise, will leave it as is. 
// This is useful for custom optional formatting. 

let someTruthyNumber = 10
someTruthyNumber &&= 20; // If a truthy value, perform a reassignment to 20. Otherwise, leave it as is (10).

// Equivalent reassignment
if (someTruthyNumber) {
    someTruthyNumber = 20
}

console.log(someTruthyNumber)


// Falsy reassignment
// * -----------------*
// || (Falsy reassignment) Will perform an assignment if the object in question is falsy,
//  otherwise, will leave it as is. This is great to assign some sort of default value.

let someFalsyNumber = 0
someFalsyNumber &&= 20;

// Equivalent reassignment
if (!someFalsyNumber) {
    someFalsyNumber = 20
}

console.log(someFalsyNumber)


// Nullish reassignment
// * -------------------*
// ?? (Nullish reassignment or nullish coalescing) Will perform an assignment if the object in question is nullish, otherwise, will leave it as is. 
// Useful to populating a missing variable or property name. 

let someNullishValue = ""
someNullishValue &&= "Now something is here.";

// Equivalent reassignment
if (someNullishValue = null) {
    someNullishValue = "Now something is here."
}

console.log(someNullishValue)
