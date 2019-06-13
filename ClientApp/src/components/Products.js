import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Product from './Product';

const Products = () => (
  <Query
    query={gql`
      {
        products {
          id
          description
          name
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.products.map(({ 
        id, description, name 
      }) => (
        <Product 
          name={name}
          description={description}
          id={id}
        />
      ));
    }}
  </Query>
);

export default Products;