import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

export const Product = (props) => {
  const [ selected, setSelected ] = useState(false);
  const [ count, setCount ] = useState(0);
  // 
  const toggleSelected = () => {
    setSelected(!selected);
  };

  const increment = () => {
    setCount(count + 1);
  };



  // find out why this is firing a re-fetch of the logo

  useEffect(() => {
    console.log('use effect runs');
  })

  // const ProductItem = styled.li`
  //   margin-top: 5px;
  //   margin-bottom: 5px;
  //   padding: ${selected ? "0" : "2px"};
  //   background-color: ${selected ? "blue" : ""};
  //   border: ${selected ? "2px solid grey" : ""};
  //   border-radius: ${selected ? "4px" : ""};
  //   box-shadow: 1px 1px 1px 1px #dddfff;
  //   cursor: pointer;
    
  //   &:hover {
  //     color: red;
  //   }
  // `;

  return (
    <div onClick={increment}>
      
      <p onClick={ toggleSelected } /*onClick={increment} */>Selected: {selected} count: {count}{props.name} - {props.description} </p>
    </div>
    // <ProductItem onClick={ toggleSelected }>
    //   <button onClick={increment } >+ {count}</button>
    //   <p>
    //     {props.name}: {props.description}
    //   </p>
    // </ProductItem>
  );

  // return (
  //   <ProductItem /*onClick={ toggleSelected }*/>
  //     <button /*onClick={increment } */ >+ {count}</button>
  //     <p>
  //       {props.name}: {props.description}
  //     </p>
  //   </ProductItem>
  // );

};