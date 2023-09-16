/* We use loops to repeat an action until we say to stop through some condition.
All the loops do just about the same thing, but how they start and end is what makes them different.
If order matters, for or .forEach is a good choice. 

Break jumps out of the loop while continue will skip that iteration of the loop. 

    Types
        for: loops through a block of code a number of times. parameter is defined at the loop.
        for/in: loops through the properties of an object
        for/of: loops through the values of an iterable object

        foreach: Is a loop, but as a function just for arrays
        map: Is a loop, but as a function just for arrays

        while: loops through a block of code while a specified condition is true.Parameter is defined before the loop.
        do/while: Performs the block of code at least once before checking the condition to see if it should run again or not.
*/


// * -----------------*
//      - for loop -
// * -----------------*
// For loops need the initializing value (Which are built in), 
// a condition to keep running the code while true, and an 
// increment to the initial value upon each successful loop. 

//        start;          stop;      do after each iteration;
for (initializingValue; condition; incrementor) {
    // code block to be executed
}

for (let counter = 0; counter < 5; counter++){
    console.log("Hello world!")
}

for (iteratorValue = 0; iteratorValue < 100; iteratorValue++) {

    if (iteratorValue % 3 == 0 && iteratorValue % 5 == 0) { console.log("Fizzbuzz") }
    else if (iteratorValue % 3 == 0) { console.log("Fizz") }
    else if (iteratorValue % 5 == 0) { console.log("Buzz") }
    else { console.log(iteratorValue) }
}


// * --------------------*
//      - for in loop -
// * --------------------*
// The for in statement loops through the properties of an object

let Rufus = {
    Name: "Rufus",
    Species: "Kangaroo",
    Gender: "Male",
}

for(let attribute in Rufus) {
    console.log(attribute)    
}

// * --------------------*
//      - for of loop -
// * --------------------*
// With the for of loop, JavaScript assumes we want to iterate through
// each of the items of the array. Which is why there aren't conditions.

const animals = ["Zebra", "Kangaroo", "Rabbit"]

for (const animal of animals){
    console.log(animal)
}

// * ----------------------*
//      - .forEach loop -
// * ----------------------*
// .forEach works exclusively on arrays, executing a provided function once for each array element.
// This is a cleaner way to iterate through something rather than using a clunky for loop.

const letters = ['a', 'b', 'c'];
letters.forEach(letter => console.log(letter));

// "a"
// "b"
// "c"

// * ------------*
//      - map -
// * ------------*
// Allows you to take the incoming elements of the array and transform them into something else.


// * -------------------*
//      - while loop -
// * -------------------*
// We define the initializing value externally and the iteration internally rather than in the parameter.
// The parameter only contains the condition for the loop to keep going. 

while (condition) {
    // code block to be executed
}

let counter = 0
while (counter < 10){
    console.log(`The current number is ${counter}`)
    counter++
}


var output = [];
var number = 1

function fizzBuzz() {

    let limit = prompt("How many times do you want to loop?")

    while (number - 1 < limit) {
        if (number % 3 == 0 && number % 5 == 0) { output.push("Fizzbuzz"); }
        else if (number % 3 == 0) { output.push("Fizz"); }
        else if (number % 5 == 0) { output.push("Buzz"); }
        else { output.push(number); }

        number++;
    }
    console.log(output)
}


function beer() {
    let bottles = 99

    while (bottles > 1) {
        console.log(`${bottles} bottles of beer on the wall. ${bottles} bottles of beer. Take one down, pass it around, ${bottles - 1} bottles of beer on the wall.`)
        bottles--;
    }

    // Finishing the song
    console.log(`1 bottle of beer on the wall. 1 bottle of beer. Take one down, pass it around, no more bottles of beer on the wall.`)
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")

    // bottles = 99 
}


function fibonacciSequence(number) {

    let fibArray = []
    let counter = 0

    // Starting phase
    if (fibArray.length === 0) {
        fibArray.push(0)
        counter++
    }

    if (fibArray.length === 1) {
        fibArray.push(1)
        counter++
    }


    // Looping phase
    let lastElement = fibArray[fibArray.length - 1]
    let previousElement = fibArray[fibArray.length - 2]
    let newEntry = lastElement + previousElement

    while (counter < number) {
        lastElement = fibArray[fibArray.length - 1]
        previousElement = fibArray[fibArray.length - 2]
        newEntry = lastElement + previousElement

        fibArray.push(newEntry)
        counter++
    }

    console.log(fibArray)
}


// * ----------------------*
//      - do while loop -
// * ----------------------*
// The do while loop is a variant of the while loop.This loop will execute the code block once, before 
// checking if the condition is true, then it will repeat the loop as long as the condition is true.

counter = 0
do {
    console.log(`The current number is ${counter}`)
    counter++
}
while (counter < 10);
