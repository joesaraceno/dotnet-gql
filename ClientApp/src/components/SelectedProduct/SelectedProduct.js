import React from "react";
import styled from "styled-components";

import "./SelectedProduct.scss";

import { useGlobalState } from "../../state/state";
import { ProductDetails } from "../ProductDetails/ProductDetails";

export const SelectedProduct = () => {
  const [selectedItem] = useGlobalState("selectedItem");

  return (
    <div className="selected-product">
      <ProductDetails id={selectedItem}></ProductDetails>
    </div>
  );
};
