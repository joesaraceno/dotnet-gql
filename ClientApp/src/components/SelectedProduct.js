import React, { useState } from 'react';

import styled from 'styled-components';

export const SelectedProduct = () => {

  const SelectedProduct = styled.div`
    width: 100%;
    border-right: 4px solid black;
    padding: 10px;
  `;

  return (
    <SelectedProduct className="selected-product-wrapper">
        <p>Selected Product:</p>
      {/* <SelectedProduct></SelectedProduct> */}
    </SelectedProduct>
  );

};