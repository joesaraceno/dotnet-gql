import React from 'react';
import styled from 'styled-components';

import { Products } from './Products';
import { SelectedProduct } from './SelectedProduct';

export const Main = () => {
  const Main = styled.div`
    display: flex;
    flex-direction: row;
  `;

  return (
      <Main className="main">
          <SelectedProduct/>
          <Products />
      </Main>
  )
};