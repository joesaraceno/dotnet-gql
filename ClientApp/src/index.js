import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo-hooks';

const link = new HttpLink({uri: "http://localhost:5050/graphql"
});
const cache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache
})

const Root = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'));