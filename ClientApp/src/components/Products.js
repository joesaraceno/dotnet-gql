import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components';

import { Product } from './Product';
import { PRODUCTS_QUERY } from '../queries/ProductsQuery';


export const Products = () => {
  const { data, error, loading } = useQuery(PRODUCTS_QUERY);
  
  if(loading) {
    return <div>Loading...</div>
  }
  
  if (error) {
    return <div>Error...{error.message}</div>
  }
  
  const ProductList = styled.ul`
    padding: 1em;
    margin: 0;
    list-style-type: none;
  `;

  return (
    <ProductList className="products">
      { data.products.map(product => (
        <Product 
          key={product.id}
          id={product.id}
          name={product.name} 
          description={product.description}
        />
      ))}
    </ProductList>
  )
};