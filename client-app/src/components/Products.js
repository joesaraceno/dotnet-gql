import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const Products = () => (
  <Query
    query={gql`
      {
        products {
          id
          description
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.products.map(({ id, description }) => (
        <div key={id}>
          <p>{id}: {description}</p>
        </div>
      ));
    }}
  </Query>
);

export default Products;