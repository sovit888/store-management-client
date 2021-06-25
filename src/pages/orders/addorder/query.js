import { gql } from "@apollo/client";

export const GET_DETAILS = gql`
  query {
    products {
      _id
      name
      price
    }
  }
`;
