import React, { useState } from "react";
import { ADD_REVIEW_MUTATION } from "../../../mutations/CustomerReviewMutation";
import { Button, TextArea, InputText, BlockHeading } from "@healthwise-ui/core";
import { useMutation } from "@apollo/react-hooks";

import "./CreateReview.scss";

export const CreateReview = (props) => {
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewDescription, setReviewDescription] = useState("");
  const [addReview, newReview] = useMutation(ADD_REVIEW_MUTATION);

  const onSubmit = (event) => {
    event.preventDefault();
    const input = {
      title: reviewTitle,
      review: reviewDescription,
      productId: props.productId,
    };
    addReview({
      variables: { newReview: input },
    });
  };

  return (
    <div>
      <BlockHeading>Have A Review?</BlockHeading>
      <form className="review__container" onSubmit={(event) => onSubmit(event)}>
        <InputText
          label="Title"
          type="text"
          onChange={(event) => setReviewTitle(event.target.value)}
        ></InputText>
        <TextArea
          label="Leave a review ..."
          onChange={(event) => setReviewDescription(event.target.value)}
        />
        <Button type="submit" value="submit">
          Submit{" "}
        </Button>
      </form>
    </div>
  );
};
