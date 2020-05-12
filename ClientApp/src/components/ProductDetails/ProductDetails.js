import React from 'react';
import styled from 'styled-components';
import {useQuery} from 'react-apollo-hooks';

import { PRODUCT_DETAILS_QUERY } from '../../queries/ProductDetailsQuery';
import { ProductReviews } from '../ProductReviews/ProductReviews'

export const ProductDetails = (props) => {
  
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

  if(!data || !data.product) {
    return(
      <div>Select A Product to view details</div>
    )
  }

  const { 
    description,
    id,
    introducedAt,
    name,
    photoFileName,
    reviews,
    price,
    rating,
    stock,
    type,
  } = data.product;
  const ProductDetails = styled.div`
    height: 100%;
    margin: 20px;
    box-shadow: 1px 1px 1px 1px #dddfff;
  `;

  const DetailsList = styled.ul`
    list-style-type: none;
    padding-left: 0;
    li {
      padding: 10px;
    }
  `
  const productReviews = reviews != null ? <ProductReviews reviews={reviews} /> : null;

  return (
    <ProductDetails>
      <DetailsList>
        <li>
          SKU: {id}
        </li>
        <li>
          release date: {introducedAt}
        </li>
        <li>
          name: {name}
        </li>
        <li>
          description: {description}
        </li>
        <li>
          ${price}
        </li>
        <li>
          rating: {rating}
        </li>
        <li>
          qty available: {stock}
        </li>
        <li>
          categories: {type}
        </li>
      </DetailsList>
      {productReviews}
    </ProductDetails>
  );
};