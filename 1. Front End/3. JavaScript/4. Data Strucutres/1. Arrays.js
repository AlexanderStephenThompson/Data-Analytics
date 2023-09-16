// Single Dimensional Array
let Weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Describing
let ArraySize = Weekdays.length; // Returns the number of elements
Weekdays.includes("Monday") // Returns true

// Listing
let dayList = Weekdays.join(", ")
console.log(`The days of the week are: ${dayList}`)

// Filtering
let ShortDays = Weekdays.filter(Day => Day.length <= 6)
console.log(ShortDays)

// * -------------------------*
//      - Common Actions  -
// * -------------------------*
// Popping and shifting removes items from an array, whereas pushing items adds items to into an array.
const shoppingCart = ["Banana", "Orange", "Apple", "Mango"];

// Adding
shoppingCart.unshift("Lemon"); // Unshfit adds a new item to the the start of the shoppingCart array
shoppingCart.push("Kiwi") // Push adds an item to the end of the shoppingCart array

shoppingCart.splice(0,0, "Blueberries", "Strawberries")
// Splice defines where the new elements should be added, how many elements should be removed and the rest of the parameters define which elements to be added.

// Removing
shoppingCart.pop() // Pop removes the last item from the shoppingCart array (Removes Kiwi in this case.)
shoppingCart.shift() // Shift removes the first item from the shoppingCart array (Removes Blueberries in this case.)


// Concatenating arrays
const coolColors = ["Blue", "Green", "Purple"]
const warmColors = ["Red", "Orange", "Yellow"]

const allColors = coolColors.concat(warmColors)
 
// * -----------------------------*
//     - Array Destructuring  -
// * -----------------------------*

// Example 1
// * ------------*
const Vehicles = ['Mustang', 'F-150', 'Expedition'];

// Old way
const car = Vehicles[0];
const truck = Vehicles[1];
const suv = Vehicles[2];

// New way
const [Car, Truck, SUV] = Vehicles
// const [Car, Truck] = Vehicles      // Unfinished assignment. What wasn't assigned will be the same.
// const [Car,, SUV] = Vehicles       // Manual skipping
// const [Car,...rest] = Vehicles     // Spread operator, a custom variable name for the remaining values.

// const [Car = "Viper", Truck, SUV]  // Fallback value


// Example 2
// * ------------*
const alphabet = ["A", "B", "C", "D", "E", "F"]
const numbers = ["1", "2", "3", "4", "5", "6"]

// const [a, b] = alphabet;    // Destructure this array by setting a and b to the first two instances of the alphabet array. 
// const [a, , c] = alphabet;  // Skips B by putting in a blank. 
// const [a, b, c,...rest]     // Leaves the rest as is

const [a, , c, ...rest] = alphabet;
console.log(rest)

function sumAndMultiply(a, b) {
  return [a + b, a * b]
}

const [sum, multiply] = sumAndMultiply(2, 3)
console.log(sum)
console.log(multiply)

// * --------------------------*
//    ------Operations ------
// * --------------------------*
// None of these operations alter the original array, but rather just make a new array and returns that new array.
// If the condition is true, it's included in the new array. If it's false, it's not added to the new array.
// https://www.youtube.com/watch?v=R8rmfD9Y5-c&t

const characters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male',
  },
];


// * ----------*
//     - Map-
// * ----------*
// Iterates through each item of the array, returning the result of the instructions provided. It's much like loops, just just for array structures.
// There's another function, foreach, that almost does the same thing, but doesn't an array. 

// 1. Get array of all names
const CharacterNames = characters.map(character => { return character.name })
console.log(CharacterNames)

// 2. Create an array of objects with just name and height properties
const NameAndHeights = characters.map((character) => ({
  name: character.name,
  height: character.height,
}));

console.log(NameAndHeights)

// 3. Get array of all first names
const firstNames = characters.map(character => character.name.split(" ")[0]);
console.log(firstNames)


const doubleSize = characters.map(character => character.mass * 2)


const numberArray = [1, 4, 9, 16];
const squaredNumbers = numberArray.map(number => number * 2);
console.log(squaredNumbers); // expected output: Array [2, 8, 18, 32]


// * -------------*
//     - Reduce-
// * -------------*
// Should be called aggregation since this combines values. Consequently, it's the only method that returns a single value instead of an array.


// 1. Get total mass of all characters
const CombinedMass = characters.reduce((currentValue, accumulatingValue) => currentValue + accumulatingValue.mass, 0);
console.log(CombinedMass)

// 2. Get total height of all characters
const CombinedHeight = characters.reduce((currentValue, accumulatingValue) => currentValue + accumulatingValue.height, 0);
console.log(CombinedHeight)

// 3. Get total number of characters by eye color
const charactersByEyeColor = characters.reduce((currentValue, accumulatingValue) => {
  const colorCount = accumulatingValue.eye_color;

  if (currentValue[colorCount]) { currentValue[colorCount]++; }
  else { currentValue[colorCount] = 1; }

  return currentValue;
}, {});
console.log(charactersByEyeColor)


// * -------------*
//     - Filter-
// * -------------*
// Filter results, creating a new array based on specified conditions.

// 1. Get characters with mass greater than some threshold
function ShowHeavyCharacters(MassThreshold) {

  let Results = characters.filter(
    // For each character, return the instance if their mass is above the threshold?
    // character is acting as a callback function returning a true or false
    character => { return character.mass >= MassThreshold }
  )

  console.log(`${Results.length} characters(s) showed up.`)
  return Results
}
console.log(ShowHeavyCharacters(100))

// 2. Get characters with height less than 200
function ShowShortCharacters(HeightThreshold) {
  let Results = characters.filter(
    character => { return character.height <= HeightThreshold }
  )

  console.log(`There are ${Results.length} short characters`)
  return Results
}
console.log(ShowShortCharacters(200))

// 3. Get all male/female characters
function ShowCharacterByGender(gender) {
  let Results = characters.filter(
    character => { return character.gender = gender }
  )

  console.log(`There are ${Results.length} ${gender} characters.`)
  return Results
}
ShowCharacterByGender("female")


// * -----------*
//     - Sort-
// * -----------*
// Sorting content

// 1. Sort by mass
const byMass = characters.sort((Light, Heavy) => Light.mass - Heavy.mass)
console.log(byMass)

// 2. Sort by height
const byHeight = characters.sort((Short, Tall) => Short.height - Tall.height)
console.log(byHeight)

// 3. Sort by name
const byName = characters.sort((A, Z) => { if (A.name < Z.name) return -1; return 1 });
console.log(byName)


// * ------------*
//     - Every-
// * ------------*
// Checks if every specified condition is true

// 1. Does every character have blue eyes?
const allBlueEyes = characters.every((character) => character.eye_color === 'blue')
console.log(allBlueEyes)

// 2. Does every character have mass more than 40?
const allAboveMediumWeight = characters.every((character) => character.mass >= 40)
console.log(allAboveMediumWeight)

// 3. Is every character male?
const allMale = characters.every((character) => character.gender === 'male')
console.log(allMale)


// * -----------*
//     - Some-
// * -----------*
// Checks if some, or any, specified conditions to be true. Then returns true or false

// 1. Is there at least one male character?
const oneMaleCharacter = characters.some((character) => { return character.gender = "male" })
console.log(oneMaleCharacter)

// 2. Is there at least one character taller than 210?
const TallCharacter = characters.some((character) => { return character.height >= 210 })
console.log(TallCharacter)

// 3. Is there at least one character that has mass less than 50?
const LightCharacter = characters.some((character) => { return character.mass <= 50 })
console.log(LightCharacter)  