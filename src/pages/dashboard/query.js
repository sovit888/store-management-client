import { gql } from "@apollo/client";

export const GET_CONTENT = gql`
  {
    users
    groups
    income
    sales
  }
`;
