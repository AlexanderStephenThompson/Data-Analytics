// Technically not a data type, but it is data we work with.

const date = new Date();

let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

console.log(`Today is ${day} ${month}, ${year}`)
