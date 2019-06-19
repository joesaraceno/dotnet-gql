import gql from 'graphql-tag';

export const PRODUCTS_QUERY = gql`
  {
    products {
      id
      description
      name
    }
  }
`;
