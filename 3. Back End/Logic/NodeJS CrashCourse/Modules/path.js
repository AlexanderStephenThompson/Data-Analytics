// Used to work with files and directories, mainly on the server you'll be on. 
const path = require('path')


let pathObject = path.parse(__filename) // Provides all attributes of a specified file.
let fileName = path.basename(__filename)
let directoryName = path.dirname(__filename)
let extension = path.extname(__filename)

// Concatenate
let combinedPath = path.join(__dirname, 'test', 'AAAHH.html');

console.log(combinedPath)