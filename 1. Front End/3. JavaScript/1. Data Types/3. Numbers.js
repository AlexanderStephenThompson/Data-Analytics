/*--------------------------*
|                          |
|    ~~~~ Numeric ~~~~     |
|                          |
*--------------------------*
You don't need to specify what type of number type it is, just like Python. 

*--------------------------------------*
   ------ Arithmetic Operators ------
*--------------------------------------*
Addition:       3 + 2
Subtraction:    3 - 2
Multiplication: 3 * 2
Division:       3 / 2
Floor Division: 3 // 2
Exponent:       3 ** 2
Modulus:        3 % 2
   

*------------------------------------*
   ------ Rules of Operation ------
*------------------------------------*
P Parentheses ()
E Exponents **
M Multiplication *
D Division /
A Addition +
S Subtraction -


*------------------------------------------------*
   ------  Increment/Decrement Operators ------
*------------------------------------------------*
Good for loops. Note that this can work with any operator, not just addition and subtraction.

Pre-increment: ++Number: Increments Number by one, then returns the updated Number value.

Post-increment: Number++: Returns the original Number value, then increments the Number by one.
   Number += 1 // Increments the number by some value we specify

Pre-decrement: --Number: Decreases Number by one, then returns the updated Number value.

Post-decrement: Number--: Returns the original Number value, then decrements the Number by one.
   Number -= 1 // Decrements the number by some value we specify

var number = 12;
number /=3; // 4

*/

var Whole_Number = 357;
var Decimal = 3.14;

// *----------------------------------------*
//    ------ Built-in Math Functions ------
// *----------------------------------------*

let milkCost = 3.5;
let allowance = 10;

const getMilk = (moneyAvailable, cost) => {

   // Prep-work
   let numberOfBottles = Math.floor(moneyAvailable / cost)
   let remainder = moneyAvailable % cost

   // Execution
   console.log(`You can get up to ${numberOfBottles} bottles and will have $${remainder} leftover.`)
}

getMilk(allowance, milkCost)


//Random
// Math.random() returns a random number between 0(inclusive), and 1(exclusive) (0 - 0.9999999999999999, yes 16 9s)

console.log(Math.ceil(Math.random() * 6)) // Random number between 1-6
