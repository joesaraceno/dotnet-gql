import gql from "graphql-tag";

export const ADD_REVIEW_MUTATION = gql`
  mutation($newReview: reviewInput!) {
    createReview(review: $newReview) {
      id
      title
      review
    }
  }
`;
