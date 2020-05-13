import React from 'react';

import { GlobalStateProvider } from './state/state';
import { Header } from './components/Header';
import { Main } from './components/Main';

import ReactDOM from 'react-dom';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';

const link = new HttpLink({uri: "http://localhost:5050/graphql"
});
const cache = new InMemoryCache();
const client = new ApolloClient({
    link,
    cache
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
        <GlobalStateProvider>
          <Header />
          <Main />
      </GlobalStateProvider>
    </ApolloProvider>
  )
}