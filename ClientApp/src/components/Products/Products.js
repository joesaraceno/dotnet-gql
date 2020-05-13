import React from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

import { Product } from "../Product/Product";
import { PRODUCTS_QUERY } from "../../queries/ProductsQuery";

import "./Products.scss";

export const Products = () => {
  const { data, error, loading } = useQuery(PRODUCTS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...{error.message}</div>;
  }

  return (
    <div className="products-list">
      {data.products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
        />
      ))}
    </div>
  );
};
