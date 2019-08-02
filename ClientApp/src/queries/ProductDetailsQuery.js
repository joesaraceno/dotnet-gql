import gql from 'graphql-tag';

// const GET_CURRENT_USER = gql`
//   query GetCurrentUser($token: String) {
//     currentUser(token: $token) {
//       id
//       username
//       avatar
//       email
//     }
//   }
// `;


export const PRODUCT_DETAILS_QUERY = gql`
  query GetProductDetails($id: Int) {
    products(Id: $id){
      # products {
        id
        description
        name
        type
        price
        stock
        rating
        introducedAt
        photoFileName
      }
    # } 
  }
`;
