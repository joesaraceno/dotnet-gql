import React from 'react';

import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import ApolloClient from 'apollo-boost';

import { Header } from './components/Header';
import { Main } from './components/Main';
const client = new ApolloClient({
    uri: "http://localhost:5000/graphql"
  });

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
                <Header />
                <Main />
            </ApolloHooksProvider>
        </ApolloProvider>
    )
}