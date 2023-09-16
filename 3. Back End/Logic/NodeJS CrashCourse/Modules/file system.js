const fs = require('fs')
const path = require('path')

// //Create Folder
// fs.mkdir(path.join(__dirname, '/test'), {}, error => {
//     if (error) { console.log(error) }
//     else { console.log('Folder created.') }
// })

// // Create & Write to File (Overwrites contents if something already exists)
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hello world!", error => {
//     if (error) { console.log(error) }
//     else { console.log('Text file created.') }
// })

// // Add to file (As a callback)
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), " Have some more text!", error => {
//     if (error) { console.log(error) }
//     else { console.log('Text file updated.') }
// })

// Read A File
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (error, data) => {
    if (error) { console.log(error) }
    else { console.log(data)}
})

// Rename a File
fs.rename(path.join(__dirname, '/test', 'hello.txt'), 
          path.join(__dirname, '/test', 'helloworld.txt'), 
          (error) => {
            if (error) { console.log(error) }
            else { console.log("File renamed") }
})