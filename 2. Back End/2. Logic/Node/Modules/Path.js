// https://nodejs.org/api/path.html

const path = require('path')

// Base file name
console.log(path.basename(__filename))

// Directory name
console.log(path.dirname(__filename))

// File extension
console.log(path.extname(__filename))

// Create path object
console.log(path.parse(__filename))
console.log(path.parse(__filename).base)
console.log(path.parse(__filename).ext)

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))




// Express equivalent
// ==================
const express = require('express');
const path = require('path');
const app = express();

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);
console.log(path.parse(__filename).ext);

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));

// Express.js route for path concatenation
app.get('/concatenate', (req, res) => {
    const concatenatedPath = path.join(__dirname, 'test', 'hello.html');
    res.send(`Concatenated Path: ${concatenatedPath}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
