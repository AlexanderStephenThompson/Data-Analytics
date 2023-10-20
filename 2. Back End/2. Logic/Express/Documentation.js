const express = require('express');
require('dotenv').config();


// init express
const app = express();


// Create endpoint/route handler
// Route handling and endpoints define how your application responds to client HTTP requests
// Route handling refers to defining how your server should respond to specific URLs (or routes) when clients (e.g., browsers, mobile apps) make HTTP requests.
// You can define various methods such as GET, POST, PUT, DELETE etc., to handle different HTTP requests.
// Express has a router so we can store routes in separate files and export them.

// While endpoints are specific urls that your application exposes.

// In this example, the endpoint is the root path '/' and the route handler is the get() method.
// Specifying hen a client sends a GET request to the root URL ('/'), the following function should be executed.
// You can load pages, get data from a database, and perform other operations in this function.
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// The request (req) object represents the HTTP request and has properties for the request query string, URL parameters, body, HTTP headers, and so on.
// The response (res) object represents the HTTP response that the Express app sends when it receives an HTTP request.

// Middleware are just functions that have access to the request and response objects.
// It's a powerful and flexible mechanism for extending the functionality of web 
// servers and handling various aspects of incoming requests and outgoing responses.
// Express has built in middleware, but you can also create your own or use third-party middleware.


// Listen on a port
const port = process.env.PORT || 6666;

// Start the Express server (Presentation Layer in the three-tier model)
app.listen(port, () => {
    console.log(`'Server is running at http://localhost:${port}`);
});
