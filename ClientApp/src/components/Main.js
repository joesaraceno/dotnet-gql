import React from 'react';
import styled from 'styled-components';

import { Products } from './Products/Products';
import { SelectedProduct } from './SelectedProduct/SelectedProduct';
import { ProductReviews } from './ProductReviews/ProductReviews';

export const Main = () => {
  const Main = styled.div`
    display: flex;
    flex-direction: row;
  `;

  return (
    <Main className="main">
      <Products />
      <SelectedProduct />
    </Main>
  )
};