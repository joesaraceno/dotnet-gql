import React, { useState } from "react";
import { ADD_REVIEW_MUTATION } from "../../../mutations/CustomerReviewMutation";
import { Button, TextArea, InputText } from "@healthwise-ui/core";
import { useMutation } from "@apollo/react-hooks";

import "./CreateReview.scss";

export const CreateReview = (props) => {
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewDescription, setReviewDescription] = useState("");
  const [addReview, newReview] = useMutation(ADD_REVIEW_MUTATION);

  const onSubmit = () => {
    const input = {
      title: reviewTitle,
      review: reviewDescription,
      productId: props.productId,
    };
    debugger;
    addReview({
      variables: { newReview: input },
    });
  };

  return (
    <form className="review__container" onSubmit={onSubmit}>
      <InputText
        type="text"
        placeholder="Title"
        onChange={(event) => setReviewTitle(event.target.value)}
      ></InputText>
      <TextArea
        placeholder="Please leave review here..."
        onChange={(event) => setReviewDescription(event.target.value)}
      />
      <Button type="submit" value="submit">
        Submit{" "}
      </Button>
    </form>
  );
};
