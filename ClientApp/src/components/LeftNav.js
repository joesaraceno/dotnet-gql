import React, { useState } from 'react';

import styled from 'styled-components';

export default function LeftNav (props) {

  const LeftNav = styled.div`
    width: 100%;
    border-right: 4px solid black;
    padding: 10px;
  `;

  return (
    <LeftNav className="left-nav">
        <p>Selected Product:</p>
      {/* <SelectedProduct></SelectedProduct> */}
    </LeftNav>
  );

};