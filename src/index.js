import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { setContext } from 'apollo-link-context';
import Profile from './profile';


// Apollo Client config
const httpLink = createHttpLink({
    uri: 'http://localhost:8085/graphql'
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('connect.sid');
    console.log(token);
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

const App = (props) => (
    <div>
        {/* <Consumer>
            {(message) => <div><h1>{message}</h1></div>}
        </Consumer> */}
        <Profile />
    </div>
);

const { Provider, Consumer } = React.createContext();

ReactDOM.render(
    <Provider value="Welcome to My App Johis">
        <ApolloProvider client={client}>
             <App />
        </ApolloProvider>
    </Provider>,
    document.getElementById("root")
);

