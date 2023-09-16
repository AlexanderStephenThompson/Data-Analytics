// You can think of async as a separate, yet parallel, process of executing code so we can do more things at once.
// Async doesn't require pass/fail exceptions, but it's just good practice.

/*
Async is just an opportunity for code to be executed in parallel.
The only tricky part is understanding syntax. Otherwise, we don't need
to over complicate things. Other than that just a matter of realizing when to use
async, most often through server calls. 
*/


// *-----------------------*
//    ---- Callbacks ----
// *-----------------------*
/* 
Callbacks can be very confusing due to the odd naming and how they’re explained, needing a lot of context to make
their specific meaning finally become somewhat apparent. Simply, a callback is function can take another function
is a parameter. The function that contains a function within it is known as a higher order function, while the 
function that’s in the higher order function is known as the callback. 

Callbacks make sure that a callback function is not going to run before a task of the higher order function is completed,
only running after the initial task has completed. You can phrase the intention of this concept as function pairing since the
callback function is only executed once the higher order function's own tasks have completed. This prevents obscure or
null/undefined values since we guarantee related and dependent functions to be ran together, usually working off of the data
of the first class's return value.

Where callbacks really shine are in asynchronous functions, where one function has to wait for another function -- and no more
nested than that since further nesting is ugly and is often refereed to as "Callback hell". Prime examples include event listeners,
lost of common tasks you'll see in modules, and something else... 
*/

// Simple Timeout example
// const logHello = () => {
//     console.log("Hello")
// }

// setTimeout(logHello, 2000)

// Event Listeners
// let button;
// button.addEventListener('click', ()=>{
//     console.log("Button clicked")
// })

// Read file with error catching.
// fs.readFile('./test.txt', {encoding: 'utf-8'}, (error, data) => {
//     if (error){
//         console.log(error.message)
//     }
//     else{
//         console.log(data)
//     }
// })


// *----------------------*
//    ---- Promises ----
// *----------------------*
/* 
Promises may be better called plans since we may have a plan in mind to do a task. Much like a plan,
we react differently depending on if it passes or fails based on some condition. When a plan goes the
way we want, then we do some other associated tasks, otherwise we catch the issue to deal with the failure. 
It's like an async if then block.

What does it mean to return a promise?
When a function returns a new promise, it means it is returning what an async function's result is -- a pass or fail.
As in, resolved with the resolved value. 

Think of "returning a promise" as possible outcomes of this plan. It returns a resolved result, either a pass or fail.
But we don't know what the result of the promise will be until it's executed. Until then, the plan is pending -- how semantic!

*/


// Without parameter 
const myFirstPlan = new Promise((pass, fail) => {

    //Code to process
    const randomNumber = Math.floor(Math.random() * 2);

    // Some determination
    if (randomNumber === 1) { pass(); }
    else { fail(0); }
})

myFirstPlan // <-- This is the object that returns the promise. (Pending, pass, or fail)
    .then(()=>console.log("The number was 1"))                 // Then do this if it passes. Using direct CLG
    .catch((result)=>console.log(`The number was ${result}`))  // Or do this if it fails. Using value from promise definition. 
    .finally(()=>console.log("All done"))                      // Executes either way.


// With parameter 
const mySecondPlan = number => {
    return new Promise((pass, fail) => {

        if (number > 5) { pass(); }
        else { fail(); }
    });
};

mySecondPlan(6)
    .then(()=>console.log("The number was greater than 5"))
    .catch(()=>console.log("The number was less than 5")) 


// Using Existing Promises Pokemon Example: https://pokeapi.co/
const fetchPokemon = pokemonID => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`) // <-- Fetch is the promise object, but assigned to a function.
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
}

fetchPokemon(6)

// Another example, but with the json placeholder api: https://jsonplaceholder.typicode.com/
fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.table(json))

// *-------------------------*
//    ---- Async/Await ----
// *-------------------------*
/*
Async await is syntactic sugar for promises. It's the same concept as promise, but structured
in a more familiar synchronous way. The keyword "async" before a higher order function makes the
function return a promise while the keyword "await" before any associated function makes the
function wait for a promise.

async makes a function return a Promise
await makes a function wait for a Promise

Is something returns a promise, the response to it must await it. 
*/


// Async Pokemon
const asyncCatchPokemon = async ID => {

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
        const data = await response.json()
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }

}
asyncCatchPokemon(6)