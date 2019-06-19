import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import ApolloClient from 'apollo-boost';

import './index.css';
import './App.css';

import Products from './components/Products';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Products />
    </ApolloHooksProvider>
  </ApolloProvider>
)


ReactDOM.render(<App />, document.getElementById('root'));