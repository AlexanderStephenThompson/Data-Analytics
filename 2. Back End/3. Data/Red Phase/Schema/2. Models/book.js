import { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString } from 'graphql';
import AuthorType from './author.js';
import { db } from '../1. Data/connection.js';

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'This represents a book written by an author',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLInt) },
        author: {
            type: AuthorType,
            resolve: async (book) => {
                const [rows] = await db.query("SELECT * FROM authors WHERE id = ?", [book.authorId]);
                return rows[0];
            }
        }
    })
});

export default BookType;
