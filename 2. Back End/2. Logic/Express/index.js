// This acts as our main entry point since it's the main file where your application starts executing.
// This is different from front end applications where you have an index.html file that acts as the main entry point.
// In the context of a MVC model, your index.js file is the start of the controller.

// Model(M): Represents the data and the business logic of the application.
// The Model is often represented by your data, databases, and business logic, which may be organized in different files and modules.

// View(V): Represents the presentation and user interface.
// Can be thought of as the response that the server sends back to the client (e.g., HTML templates, JSON responses, or even frontend frameworks like React

// Controller(C): Acts as an intermediary that handles user input, processes it, interacts with the model to retrieve or modify data, and updates the view.
// is where the actual request handling and routing occur. This is the role that app.js or index.js plays.It defines the routes, interacts with the model(if needed),
// and sends the appropriate response to the client.

// Import required modules
const express = require("express");
const app = express();
const path = require("path");



require("dotenv").config();


// Define middleware
app.use(express.json());  // Middleware to parse JSON in requests
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded data in requests

// Serve static files from the "Public" folder
app.use(express.static(path.join(__dirname, "Public")));

// Members API Routes
app.use('/api/members', require('./Routes/API/members'));

// Server Initialization
const PORT = process.env.PORT || 3000; // Use process.env.PORT if defined, otherwise default to 3000

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
