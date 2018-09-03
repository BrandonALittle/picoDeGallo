const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const mongoose = require('mongoose');
const secret = require('../.env');

// connect to database
mongoose.connect("mongodb://localhost:27017/langnation");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));

// graphql dependencies
const { ApolloServer } = require('apollo-server-express');

// graphql schema setup
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    playground: { // add playground to /graphql endpoint
        settings: {
            'editor.theme': 'light',
        }
    },
    context: ({ req }) => ({
        user: req.user
    })
 });

// express app
const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../build'));

const auth = jwt({
    secret: secret,
    credentialsRequired: false
})

app.use(auth);

// integrate apolloserver as middleware
server.applyMiddleware({ app });

const PORT = process.env.PORT || 8085;

app.listen({ port: PORT }, () => {
    console.log(`The server is running at http://localhost:8085${server.graphqlPath}`);
});