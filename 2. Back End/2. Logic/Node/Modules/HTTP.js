const http = require('http');

PORT = 6969;

// Create server object
http.createServer((req, res) => {
    
    // Write response
    res.write('Hello World');
    res.end();

}).listen(PORT, () => console.log(`Server running! Go to http://localhost:${PORT}`));
// Run this server with the following command: node HTTP.js


// // Express Equivalent
// // =================

// // Create an instance of the Express application, acting like the server object.
// // You  can configure routes, middleware, and other settings on this app object to define how your server behaves.
// const express = require('express');
// const app = express();

// // Define the port number on which the server will listen
// const port = 9000;

// // Define a route for the root URL ('/') using the HTTP GET method
// app.get('/', (req, res) => {

//     // Handle incoming HTTP GET requests to the root URL
//     // This part fits into the PRESENTATION LAYER of the three-tier model.
//     // It's responsible for handling user interactions via HTTP requests and responses.
//     // The presentation layer interacts with the user and sends responses to the client (browser).

//     // Send the 'Hello World' response to the client
//     res.send('Hello World');
// });

// // Start the Express server and listen on the specified port
// app.listen(port, () => {
//     // This part also fits into the PRESENTATION LAYER.
//     // It involves starting the HTTP server and listening for incoming HTTP requests.

//     console.log(`Server running on port ${port}`);
// });
