// * -------------------------*
// |                          |
// |      ~~~~~JSON ~~~~~     |
// |                          |
// * -------------------------*
/* JavaScript Object Notation
https://jsonplaceholder.typicode.com/

Looks much like a JavaScript, but has quotes or backticks around it (when in a Javascript file)
and all keys must be in double quotes quotes. However, in a pure JSON file the quotes are not present. 
Should absolutely get JSON viewer extension for Chrome.

/ Syntax
{"key":"value"}

The file name would act like the table name, indicating what kind of data is within
{
  "Strings": "Test",
  "Numbers": 1,
  "Booleans": true,
  "Arrays": [ "Value1", "Value2", "Value3" ],
  "Objects": {"Name": "Rufus", "Age":28, "IsBouncy": true}
}

*/

let JSON_Options = `{
  "Strings": "Words!",
  "Numbers": 357,
  "Boolean": true,
  "Nulls": null,
  "Arrays": ["Item 1", "Item 2", "Item 3"],
  "Objects": {"key":"value"}
}`
const Options = JSON.parse(JSON_Options) //Converts this into a JavaScript object we can use

console.log(Options.Strings)
console.log(Options.Numbers)
console.log(Options.Boolean)
console.log(Options.Nulls)
console.log(Options.Arrays[1])
console.log(Options.Objects)

JSON_Object = JSON.stringify(Options) // Converts a JavaScript object into a JSON object.


// * -----------------------------*
//    ------ Single Object ------
// * -----------------------------*
var Rufus_JSON = `{ "Name": "Rufus", "Species": "Kangaroo", "Gender": "Male"}`;

var Rufus_JSON = `{"Name": "Rufus",
                   "Species": "Kangaroo",
                   "Gender": "Male"}`;

const Rufus = JSON.parse(Rufus_JSON);
document.getElementById("Rufus").innerHTML = Rufus.Name;


// * -----------------------------*
//    ------ Multi Object ------
// * -----------------------------*
let Characters_JSON = `{"Characters":[
                        { "Name": "Felix", "Species": "Kangaroo", "Gender": "Male"},
                        { "Name": "Kira", "Species": "Laquine", "Gender": "Herm"},
                        { "Name": "Levent", "Species": "Zebra", "Gender": "Male"}]}`;

const CharacterList = JSON.parse(Characters_JSON);
document.getElementById("Characters").innerHTML = CharacterList.Characters[1].Name;



// Show fetch API to show practical use of JSON
// All instances
// fetch('https://jsonplaceholder.typicode.com/posts/')
//     .then(response => response.json())
//     .then(data => console.log(data))


// Specific instance instances
// let userID = 1
// fetch(`https://jsonplaceholder.typicode.com/posts/${userID}`)
//     .then(response => response.json())
//     .then(data => console.log(data)) // Show all attributes
// .then(data => console.log(data.title)) // Show just one attribute


// iterate through all instances
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {

    let output = "" // Empty container

    data.forEach(user => output += `
            <ul>
                <li><b>ID:</b> ${user.id}</li>
                <li><b>Title:</b> ${user.title}</li>
            </ul>
        `)
    document.getElementById("listing").innerHTML = output
  })
