import React from 'react';
import { useQuery } from 'react-apollo-hooks';

import Product from './Product';
import { PRODUCTS_QUERY } from '../queries/ProductsQuery';

export default function Products () {
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
};