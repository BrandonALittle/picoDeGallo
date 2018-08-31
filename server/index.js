const express = require('express');
const bodyParser = require('body-parser');

// graphql dependencies
const { ApolloServer, gql } = require('apollo-server-express');

// graphql schema setup
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Yoyoyoyoy',
    },
};

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    playground: { // add playground to /graphql endpoint
        settings: {
            'editor.theme': 'dark',
        }
    }
 });

// express app
const app = express();


// integrate apolloserver as middleware
server.applyMiddleware({ app });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/../build'));

const PORT = process.env.PORT || 8085;

app.listen({ port: PORT }, () => {
    console.log(`The server is running at http://localhost:8085${server.graphqlPath}`);
});