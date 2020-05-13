import React from "react";
import styled from "styled-components";

import "./ProductReviews.scss";

import { ProductReview } from "../ProductReview/ProductReview";
import { CreateReview } from "./CreateReview/CreateReview";

export const ProductReviews = (props) => {
  let reviews;
  const productId = props.productId;
  if (props.reviews) {
    reviews = props.reviews.map((r) => <ProductReview review={r} key={r.id} />);
  } else {
    reviews = "No reviews available";
  }

  return (
    <div className="reviews__container">
      <div className="reviews__header">Customer Reviews</div>
      <div>{reviews}</div>
      <CreateReview productId={productId} />
    </div>
  );
};

// get list of reviews

// map reviews to review component
