const User = require('../data/store');
const jsonwebtoken = require('jsonwebtoken');
const secret = require('../.env');

const resolvers = {
    Query: {
      hello: () => 'hello',
      getUser: async (_, args, { user }) => { 
          if(!user) {
              throw new Error('You are not authenticated!');
          }
          console.log(`The user ${user.username} has been authenticated and returned.`)
          // user is authenticated
          return await User.findOne({ username: user.username })
      }
    },
    User: (obj) => obj,
    Mutation: {
        // Handle user signup
        signup: async (_, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            if (!user) {
                throw new Error('There was an error creating the user');
            }
            console.log(`The user ${user} was successfully created.`)
            // return json web token
            return jsonwebtoken.sign(
                { username: user.username, email: user.email },
                secret,
                { expiresIn: '100000000000000' }
            );
        },

        // Handles user login
        login: async (_, { email, password }) => {
            const user = await User.authenticate(email, password);

            if (!user) {
                throw new Error('These credentials do not match any user in the database.');
            }
            console.log(`The user ${user} has successfully logged in.`)
            // return json web token
            return jsonwebtoken.sign(
                { username: user.username, email: user.email },
                secret,
                { expiresIn: '1000000000000000' }
            );
        }
      }
};

module.exports = resolvers;