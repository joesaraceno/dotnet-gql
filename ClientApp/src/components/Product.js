import React from 'react';
import styled from 'styled-components';

import { useGlobalState } from '../state/state';

export const Product = (props) => {
  const [ selectedItem, setSelectedItem ] = useGlobalState('selectedItem');
  const selected = selectedItem == props.id;

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
    <ProductItem onClick={() => setSelectedItem(props.id) }>
      <p>
        {props.name}: {props.description}
      </p>
    </ProductItem>
  );
};