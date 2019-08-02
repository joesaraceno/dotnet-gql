import React from 'react';
import styled from 'styled-components';

import { useGlobalState } from '../state/state';
import { ProductDetails } from './ProductDetails';

export const SelectedProduct = () => {
  const [ selectedItem ] = useGlobalState('selectedItem');

  const SelectedProductWrapper = styled.div`
    width: 100%;
    border-right: 4px solid black;
    padding: 10px;
  `;

  return (
    <SelectedProductWrapper className="selected-product-wrapper">
        <p>Selected Product:</p>
        <ProductDetails id={selectedItem}></ProductDetails>
    </SelectedProductWrapper>
  );

};