import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

export const ProductDetails = (props) => {
  const [ selected, setSelected ] = useState();

  const ProductDetails = styled.div`
    height: 100%;
    margin: 20px;
    box-shadow: 1px 1px 1px 1px #dddfff;
  `;

  return (
    <ProductDetails>
      <div>
        {props.name}: {props.description}
      </div>
    </ProductDetails>
  );

};