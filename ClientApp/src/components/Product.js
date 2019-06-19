import React, { useState } from 'react';

import styled from 'styled-components';

export default function Product (props) {
  const [ selected, setSelected ] = useState(false);
  const [ count, setCount ] = useState(0);
  
  const toggleSelected = () => {
    setSelected(!selected);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const ProductItem = styled.li`
    margin-top: 5px;
    margin-bottom: 5px;
    padding: ${selected ? "0" : "2px"};
    background-color: ${selected ? "blue" : ""};
    border: ${selected ? "2px solid grey" : ""};
    border-radius: ${selected ? "4px" : ""};
  `;

  return (
    <ProductItem onClick={ toggleSelected }>
      <button onClick={ increment }>+ {count}</button>
      <p>
        {props.name}: {props.description}
      </p>
    </ProductItem>
  );

};