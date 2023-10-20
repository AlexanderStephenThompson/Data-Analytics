import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const bookResolvers = {
    Query: {
        book: async (parent, args) => {
            return await prisma.book.findUnique({ where: { id: args.id } });
        },
        books: async () => {
            return await prisma.book.findMany();
        }
    },
    Book: {
        author: async (book) => {
            return await prisma.author.findUnique({ where: { id: book.authorId } });
        }
    },
    Mutation: {
        addBook: async (parent, args) => {
            return await prisma.book.create({
                data: {
                    name: args.name,
                    authorId: args.authorId
                }
            });
        }
    }
};

export default bookResolvers;
