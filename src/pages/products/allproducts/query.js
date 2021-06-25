import { gql } from "@apollo/client";

export const GET_DETAILS = gql`
  query {
    brands {
      name
    }
    categorys {
      name
    }
    stores {
      name
    }
    attributes {
      name
      attribute {
        name
      }
    }
  }
`;
