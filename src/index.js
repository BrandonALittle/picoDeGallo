import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


// Apollo Client config
const httpLink = createHttpLink({
    uri: 'http://localhost:8085'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

// simple app component
const App = () => (
    <div>
		{/* checking the react context api */}
        <Consumer>
            {(message) => <h1>{message}</h1>}
        </Consumer>
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