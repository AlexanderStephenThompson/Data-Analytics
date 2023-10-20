const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, '/test');

// Check if folder exists
if (!fs.existsSync(folderPath)) {

    // Create folder
    fs.mkdir(folderPath, {}, error => {
        if (error) throw error;
        console.log('Folder created...');
    });
}
else {
    console.log('Folder already exists...');
}

// Create and write to file - will overwrite existing file
fs.writeFile(path.join(folderPath, 'hello.txt'), 'Hello World!', error => {
    if (error) throw error;
    console.log('File written to...');

    // Append to file - will create file if it doesn't exist, otherwise will append to existing file
    fs.appendFile(path.join(folderPath, 'hello.txt'), ' I love Node.js', error => {
        if (error) throw error;
        console.log('Text appended!');
    });

    // Read file
    fs.readFile(path.join(folderPath, 'hello.txt'), 'utf8', (error, data) => {
        if (error) throw error;
        console.log(data);
    });

    // Rename file
    fs.rename(path.join(folderPath, 'hello.txt'), path.join(folderPath, 'helloworld.txt'), error => {
        if (error) throw error;
        console.log('File renamed...');
    });
});

