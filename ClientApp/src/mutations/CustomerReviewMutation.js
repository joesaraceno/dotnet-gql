import gql from 'graphql-tag';

export const ADD_COMMENT_MUTATION = gql`
  mutation createMutation($review: reviewInput!) {
      createReview(review: $review){
        id,
        title,
        review
    }
  }
`;
