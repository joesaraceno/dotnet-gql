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
          name
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.products.map(({ id, description, name }) => (
        <div key={id}>
          <p>{name}: {description}</p>
        </div>
      ));
    }}
  </Query>
);

export default Products;