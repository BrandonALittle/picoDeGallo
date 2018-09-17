const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        hello: String
        getUser: User
    }

    type User {
        id: Int!
        username: String!
        email: String
    }

    type  Mutation {
        signup (username: String!, email: String!, password: String!): String
        login (email: String!, password: String!): String
    }
`;

module.exports = typeDefs;