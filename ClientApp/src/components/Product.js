import React, { useState, useEffect } from 'react';

const Product = props => {
  const [ selected, setSelected ] = useState(false);
  const [ count, setCount ] = useState(0);
  
  const toggleSelected = () => {
    console.log(selected);
    setSelected(!selected);
  };

  const increment = () => {
    console.log(count);
    setCount(count + 1);
  };

  return (
    <div className={selected ? "selected" : ""} onClick={ toggleSelected }>
      <button onClick={ increment }>+ {count}</button>
      <p>
        {props.name}: {props.description}
      </p>
    </div>
  );
};

export default Product;