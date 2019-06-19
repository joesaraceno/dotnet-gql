import React, { useLayoutEffect } from 'react';
import { Query } from "react-apollo";
// import { gql } from "apollo-boost";
import Product from './Product';

import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

const PRODUCTS_QUERY = gql`
  {
    products {
      id
      description
      name
    }
  }
`;


const Products = () => {
  const { data, error, loading } = useQuery(PRODUCTS_QUERY);

  if(loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error...{error.message}</div>
  }

  return (
    <ul>
      { data.products.map(product => (
        <Product 
          key={product.id}
          name={product.name} 
          description={product.description}
        />
      ))}
    </ul>
  )
} 

export default Products;

// const Products = () => (
//   <Query
//     query={gql`
//       {
//         products {
//           id
//           description
//           name
//         }
//       }
//     `}
//   >
//     {({ loading, error, data }) => {
//       if (loading) return <p>Loading...</p>;
//       if (error) return <p>Error :(</p>;

//       return data.products.map(({ 
//         id, description, name 
//       }) => (
//         <Product 
//           key={id}
//           name={name}
//           description={description}
//         />
//       ));
//     }}
//   </Query>
// );

// export default Products;