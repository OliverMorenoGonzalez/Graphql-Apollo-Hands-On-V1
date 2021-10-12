const { gql } = require('apollo-server');

module.exports = gql`
    type Query {
        blog(
            id: ID
            article: String
            author: String
            content: String
            tags: String
        ): [Blog]
        blogById(id: ID): Blog
    }
    type Blog{
        id: ID!
        article: String
        author: String
        content: String
        tags: String
    }
`;