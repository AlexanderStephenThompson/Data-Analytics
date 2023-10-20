import { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLList } from 'graphql';
import BookType from './book.js';
import {db} from '../1. Data/connection.js';

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'This represents a author of a book',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        books: {
            type: new GraphQLList(BookType),
            resolve: async (author) => {
                const [rows] = await db.query("SELECT * FROM books WHERE authorId = ?", [author.id]);
                return rows;
            }
        }
    })
});

export default AuthorType;
