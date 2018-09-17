import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { setContext } from 'apollo-link-context';
import Profile from './profile';
import App from './app';


// Apollo Client config
const httpLink = createHttpLink({
    uri: 'http://localhost:8085/graphql',
});

// send authentication with every client request
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('authToken');
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
    connectToDevTools: true
});

const { Provider, Consumer } = React.createContext();

ReactDOM.render(
    <Provider value="Welcome to My App Johis">
        <ApolloProvider client={client}>
             <App />
        </ApolloProvider>
    </Provider>,
    document.getElementById("root")
);

