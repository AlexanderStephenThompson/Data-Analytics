import bookResolvers from './books.js';
import authorResolvers from './authors.js';

const resolvers = {
    Query: {
        ...bookResolvers.Query,
        ...authorResolvers.Query
    },
    Mutation: {
        ...bookResolvers.Mutation,
        ...authorResolvers.Mutation
    }
};

export default resolvers;