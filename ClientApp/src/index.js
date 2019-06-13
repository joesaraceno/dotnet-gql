import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Products from './components/Products';

import * as serviceWorker from './serviceWorker';

import ApolloClient from "apollo-boost";

import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <h1>Product List</h1>
        <Products />
      </header>
    </div>
  </ApolloProvider>
)


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
