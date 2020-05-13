import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

import { PRODUCT_DETAILS_QUERY } from "../../queries/ProductDetailsQuery";
import { ProductReviews } from "../ProductReviews/ProductReviews";

import "./ProductDetails.scss";
export const ProductDetails = (props) => {
  const { data, error, loading } = useQuery(PRODUCT_DETAILS_QUERY, {
    variables: {
      id: props.id,
    },
  });

  if (error) {
    return <div>Error...{error.message}</div>;
  }

  if (!data || !data.product) {
    return <div>Select A Product to view details</div>;
  }

  const {
    description,
    id,
    introducedAt,
    name,
    photoFileName,
    reviews,
    price,
    rating,
    stock,
    type,
  } = data.product;

  const images = require.context("../../images", true);
  let imageSource = images("./" + photoFileName);

  const productReviews =
    reviews != null ? (
      <ProductReviews productId={id} reviews={reviews} />
    ) : null;

  return (
    <div className="product-details__container">
      <div className="product-details__main">
        <img className="product__image" src={imageSource} alt="product" />
        <ul className="product-details__list">
          <li className="product__name">{name}</li>
          <li className="product__description">{description}</li>
          <li>Price: ${price.toFixed(2)}</li>
          <li>rating: {rating}</li>
          <li>qty available: {stock}</li>
          <li>categories: {type}</li>
        </ul>
      </div>
      {productReviews}
    </div>
  );
};
