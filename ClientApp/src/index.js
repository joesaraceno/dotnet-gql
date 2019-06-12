import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
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
               <img src={logo} className="App-logo" alt="logo" />
               {/* <p> */}
                 <Products />{/* Edit <code>src/App.js</code> and save to reload. */}
               {/* </p> */}
               <a
                 className="App-link"
                 href="https://reactjs.org"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 Learn React
               </a>
           </header>
           </div>
      
  </ApolloProvider>
)


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
