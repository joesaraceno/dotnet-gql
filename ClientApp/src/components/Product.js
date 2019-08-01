import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

export const Product = (props) => {
  const [ selected, setSelected ] = useState(1);
  
  const toggleSelected = (productId) => {
    setSelected(productId);
  };

  const ProductItem = styled.li`
    margin-top: 5px;
    margin-bottom: 5px;
    padding: ${selected ? "0" : "2px"};
    border: ${selected ? "2px solid grey" : ""};
    border-radius: ${selected ? "4px" : ""};
    box-shadow: 1px 1px 1px 1px #dddfff;
    cursor: pointer;
    
    &:hover {
      color: red;
    }
  `;

  return (
    <ProductItem onClick={() => toggleSelected(props.id) }>
      <p>
        {props.name}: {props.description}
      </p>
    </ProductItem>
  );

};