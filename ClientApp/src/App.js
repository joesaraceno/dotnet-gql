import React from 'react';

import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import ApolloClient from 'apollo-boost';

import Products from './components/Products';

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql"
  });

export default function App () {
    return (
        <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
                <Products />
            </ApolloHooksProvider>
        </ApolloProvider>
    )
}