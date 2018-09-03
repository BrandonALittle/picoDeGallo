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
            // return json web token
            return jsonwebtoken.sign(
                { username: user.username, email: user.email },
                secret,
                { expiresIn: '1y' }
            );
        },

        // Handles user login
        login: async (_, { email, password }) => {
            const user = await User.authenticate(email, password);

            if (!user) {
                throw new Error('These credentials do not match any user in the database.');
            }

            // return json web token
            return jsonwebtoken.sign(
                { username: user.username, email: user.email },
                secret,
                { expiresIn: '1d' }
            );
        }
      }
};

module.exports = resolvers;