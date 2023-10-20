// You often start of projects with "npm init" to create a package.json file
// This file is used to store information about your project
// It also stores all the dependencies that your project needs to run

// {
//     "name": "node",                                           // The name of the package or project.
//     "version": "1.0.0",                                       // The version number of the package, following a semantic versioning (SemVer) format (e.g., MAJOR.MINOR.PATCH).
//     "description": "",                                        // A brief textual description of the package or project.
//     "main": "index.js",                                       // The entry point for the package, typically the main JavaScript file that will be executed when the package is imported or run.
//      "scripts": {
//         "test": "echo \"Error: no test specified\" && exit 1" // A set of commands or scripts that can be executed using npm, such as npm test. In this case, the "test" script is defined, which outputs an error message and exits.
//     },
//     "keywords": [],                                           // An array of keywords that describe the package. These can be used for categorization and search.
//     "author": "",                                             // The name of the package's author or creator.
//     "license": "ISC"                                          // The license under which the package is distributed. In this case, it's "ISC," but it can be other licenses like "MIT," "Apache-2.0," etc.
// }

// To run a script you use "npm run <script name>" such as "npm run test"

// Then you install the dependencies with "npm install <package name>"
// This will create a node_modules folder and store all the dependencies in there

// Dev dependencies are dependencies that are only used during development. They are not needed for the project to run, but rather helps the developer to develop the project.
// To install dev dependencies you use "npm install -D <package name>"

// When you're ready to deploy your project you can use "npm install --production" to only install the dependencies and not the dev dependencies
// You don't need the node-modules folder on the server, so you can delete it before you deploy your project. Then you'd just run npm install to install the dependencies
// You can do this because the dependencies and devDependencies are stored in the package.json file which is what npm install uses to reference and install the dependencies