const { ApolloServer } = require('apollo-server');
const BlogAPI = require('./datasources/blog.js');

const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');

const dataSources = () => ({
    blogAPI: new BlogAPI(),
});
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
});
server
    .listen({port: process.env.PORT || 4000})
    .then(({url})=>{
        console.log(`GraphQL running at ${url}`);
    })