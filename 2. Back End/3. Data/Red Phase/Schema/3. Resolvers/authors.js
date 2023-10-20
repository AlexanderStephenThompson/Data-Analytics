import redisClient from '../1. Data/redisClient.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const authorResolvers = {
    Query: {
        author: async (parent, args) => {
            const authorCacheKey = `author:${args.id}`;

            // Try to fetch from cache
            const cachedAuthor = await redisClient.get(authorCacheKey);

            if (cachedAuthor) {
                return JSON.parse(cachedAuthor);
            }

            // If not in cache, fetch from database
            const author = await prisma.author.findUnique({ where: { id: args.id } });

            // Cache the result for next time
            redisClient.set(authorCacheKey, JSON.stringify(author));

            return author;
        },
        authors: async () => {
            const authorsCacheKey = 'all_authors';

            // Try to fetch from cache
            const cachedAuthors = await redisClient.get(authorsCacheKey);

            if (cachedAuthors) {
                return JSON.parse(cachedAuthors);
            }

            // If not in cache, fetch from database
            const authors = await prisma.author.findMany();

            // Cache the result for next time
            redisClient.set(authorsCacheKey, JSON.stringify(authors));

            return authors;
        }
    },
    Author: {
        books: async (author) => {
            return await prisma.book.findMany({ where: { authorId: author.id } });
        }
    },
    Mutation: {
        addAuthor: async (parent, args) => {
            // When adding a new author, we might want to invalidate or update the cache
            // depending on our caching strategy. For now, we'll just save to the database.
            return await prisma.author.create({ data: { name: args.name } });
        }
    }
};

export default authorResolvers;
