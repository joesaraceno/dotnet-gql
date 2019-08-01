import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import useGlobalHook from 'use-global-hook';

const initialState = {
  selectedItem: 0,
}

const actions = {
  selectItem: (store, itemId) => {
    store.setState({ selectedItem: itemId });
  }
}

const useGlobal = useGlobalHook(React, initialState, actions);

export const Product = (props) => {
  const [ globalState, globalActions ] = useGlobal();
  const selected = globalState.selectedItem == props.id;

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
    <ProductItem onClick={() => globalActions.selectItem(props.id) }>
      <p>
        {props.name}: {props.description}
      </p>
    </ProductItem>
  );

};