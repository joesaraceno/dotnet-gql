import gql from 'graphql-tag';

export const PRODUCT_DETAILS_QUERY = gql`
  query GetProductDetails($id: ID!) {
    product(id: $id){
      id
      description
      name
      type
      price
      stock
      rating
      introducedAt
      photoFileName
      # reviews{
      #   id,
      #   review, 
      #   title
      # }
    }
  }
`;
