// -----------------------------
// MODULE IMPORTS
// -----------------------------
// Node modules
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

// Third-party modules
import { ApolloServer } from 'apollo-server-express';
import { GraphQLSchema } from 'graphql';
import bodyParser from 'body-parser';
import cors from 'cors';

// Prisma Client
import { PrismaClient } from '@prisma/client';

// Redis Client
import redisClient from './Schema/1. Data/redisClient.js';


// Local modules
import RootQueryType from './Schema/4. Operations/query.js';
import RootMutationType from './Schema/4. Operations/mutation.js';

// -----------------------------
// CONSTANTS & GLOBALS
// -----------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = 3000;

// Instantiate Prisma Client
const prisma = new PrismaClient();

// -----------------------------
// EXPRESS SETUP
// -----------------------------
const app = express();

// Apply Middlewares
app.use(cors());                                    // CORS middleware for cross-origin requests
app.use(bodyParser.json());                         // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(express.static(path.join(__dirname)));      // Serve static files

// -----------------------------
// GRAPHQL SETUP
// -----------------------------
const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});

const server = new ApolloServer({
    schema,
    playground: true,        // Enables the Apollo Studio for testing
    introspection: true,     // Allows schema introspection, which Apollo Studio needs
    cors: true               // Enable CORS for all origins
});

// -----------------------------
// ROUTE HANDLERS
// -----------------------------
// Serve the index.html file for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// -----------------------------
// GRACEFUL PRISMA SHUTDOWN
// -----------------------------
process.on('exit', () => {
    redisClient.quit();
});


// -----------------------------
// GRACEFUL PRISMA SHUTDOWN
// -----------------------------
process.on('SIGINT', () => {
    console.log('Shutting down server...');
    prisma.$disconnect();
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('Shutting down server...');
    prisma.$disconnect();
    process.exit(0);
});

// -----------------------------
// START THE SERVER
// -----------------------------
(async () => {
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
    });
})();



// Start with: npm start server

// Helpful links:
//  - https://www.youtube.com/watch?v=ZQL7tL2S0oQ
//  - https://www.youtube.com/watch?v=Dr2dDWzThK8
//  - https://mockaroo.com/