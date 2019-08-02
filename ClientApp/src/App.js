import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import ApolloClient from 'apollo-boost';

import { GlobalStateProvider } from './state/state';
import { Header } from './components/Header';
import { Main } from './components/Main';
const client = new ApolloClient({
  uri: "http://localhost:5050/graphql"
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <GlobalStateProvider>
          <Header />
          <Main />
        </GlobalStateProvider>
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}