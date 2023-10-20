import { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLList } from 'graphql';
import BookType from '../2. Models/book.js';
import AuthorType from '../2. Models/author.js';
import resolvers from '../3. Resolvers/index.js';


const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        book: {
            type: BookType,
            description: 'A Single Book',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: resolvers.Query.book
        },
        books: {
            type: new GraphQLList(BookType),
            description: 'List of All Books',
            resolve: resolvers.Query.books
        },
        authors: {
            type: new GraphQLList(AuthorType),
            description: 'List of All Authors',
            resolve: resolvers.Query.authors
        },
        author: {
            type: AuthorType,
            description: 'A Single Author',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: resolvers.Query.author
        }
    })
});

export default RootQueryType;