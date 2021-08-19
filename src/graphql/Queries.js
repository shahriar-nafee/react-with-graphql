import { gql } from "@apollo/client";

export const GET_CHARACTERS_QUERY = gql`
  query {
    characters {
      results {
        name
        location {
          name
        }
        episode {
          name
        }
      }
    }
  }
`;
