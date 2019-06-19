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

  const BoxDiv = styled.div`
    padding: ${selected ? "0" : "4px"}
    background-color: ${selected ? "blue" : ""}
    border: ${selected ? "4px solid grey" : ""}
    border-radius: ${selected ? "4px" : ""}
  `;

  return (
    <BoxDiv onClick={ toggleSelected }>
      <button onClick={ increment }>+ {count}</button>
      <p>
        {props.name}: {props.description}
      </p>
    </BoxDiv>
  );

};