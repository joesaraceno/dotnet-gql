import React from 'react';
import styled from 'styled-components';
import {useQuery} from 'react-apollo-hooks';

import { PRODUCT_DETAILS_QUERY } from '../queries/ProductDetailsQuery';

export const ProductDetails = (props) => {
  debugger;
  
  const { data, error, loading } = useQuery(PRODUCT_DETAILS_QUERY, { 
    variables: {
      id: props.id
    }
  });

  if(loading) {
    return <div>Loading...</div>
  }
  
  if (error) {
    return <div>Error...{error.message}</div>
  }
  
  const ProductDetails = styled.div`
    height: 100%;
    margin: 20px;
    box-shadow: 1px 1px 1px 1px #dddfff;
  `;
  return (
    <ProductDetails>
      <div>
        { data }
      </div>
    </ProductDetails>
  );
};