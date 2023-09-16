/*-------------------------*
|                          |
|    ~~~~ Strings ~~~~     |
|                          |
*--------------------------*
JavaScript allows you can use single or double quotes
*/

// *----------------------------*
//    ------ Common Use ------
// *----------------------------*

// Single line comment

/* This is a
multiple line
comment structure */

let Name = "Rufus B. Cobber";

let Single_Line = "This is a single line";

let Multiple_Line = `This is a
template literal. It will support
your multi line needs.`;

// User input
function Greeting() {
  let User_Name = prompt("Please enter your name", "Placeholder Name");

  if (User_Name != null) {
    document.getElementById("demo").innerHTML = `Hello ${User_Name.toLocaleLowerCase()}!`; //How are you today?`;
  }
}

// Interpolation - Need backticks and ${}
let Greeting = `Hey there ${Name}! Good to see you!`;

// New line
let New_Line = "This statement \n will be printed \n onto multiple lines";


// Escape Characters
/*
  \'	'	Single quote
  \"	"	Double quote
  \\	\	Backslash

  \b	Backspace
  \f	Form Feed
  \n	New Line
  \r	Carriage Return
  \t	Horizontal Tabulator
  \v	Vertical Tabulator
*/

// *----------------------------------*
//    ------ String Formatting ------
// *----------------------------------*


// *-----------------------*
//    ------ Regex ------
// *-----------------------*
let string1 = 'This is the longest string ever.';
let string2 = 'This is the shortest string ever.';
let string3 = 'Is this the thing called Mount Everest?';
let string4 = 'This is the Sherman on the Mount.';
 
let regex = /this/;

console.log( regex.test(string1) ); 
console.log( regex.test(string2) );
console.log( regex.test(string3) );
console.log( regex.test(string4) );

regex = /this/i; // i tells the search is case insensitive 
regex = /^this/i; // ^ checks if the expression starts at the beginning of the string
regex = /this$/i; // Checks if at the end
regex = /ever.$/i; 
regex = /ever\.$/i;
regex = /Moun.$/i;


// *------------------------------------*
//    ------ Built-in Functions ------
// *------------------------------------*

// Transformation
let myMessage = "Hello world!";

let loudMessage = myMessage.toUpperCase()
let quietMessage = myMessage.toLowerCase()

// Slicing 

// Tweet Simulation
const limit = 140
let message = prompt("Tell me what's on your mind")
let messageLength = message.length;
let remaining = limit - messageLength;

alert(`You've typed ${messageLength} characters so far and have ${remaining} characters left`)

let finalMessage = message.slice(0, limit + 1)
alert(finalMessage)


// Proper Name
let entryName = prompt("What is your name?")

let firstLetter = entryName.slice(0, 1)
let capitalStart = firstLetter.toUpperCase()

let remainingName = entryName.slice(1).toLowerCase()
let properName = capitalStart + remainingName

alert(properName)


// Substring
let email = "john.doe@email.com";

email.length

let UserName = email.substring(0, email.lastIndexOf("@"));
let Domain = email.substring(email.lastIndexOf("@") + 1);

console.log(UserName);  // john.doe
console.log(Domain);    // email.com

