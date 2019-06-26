import React from 'react';

import styled from 'styled-components';

import Products from './Products';
import LeftNav from './LeftNav';


export default function Main () {
  const Main = styled.div`
    display: flex;
    flex-direction: row;
  `;

  return (
      <Main className="main">
          <LeftNav/>
          <Products />
      </Main>
  )
};