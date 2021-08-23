import { gql } from "@apollo/client";

export const GET_CHARACTERS_QUERY = gql`
  query {
    characters {
      results {
        name
        image
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

export const GET_ALL_CHARACTERS_NAME = gql`
  query {
    characters {
      results {
        id
        name
        gender
        status
      }
    }
  }
`;

export const GET_CHARACTER_DETAILS = gql`
  query GET_CHARACTER_DETAILS($id: ID!) {
    character(id: $id) {
      name
      status
      species
      gender
      image
      location {
        name
      }
      episode {
        name
        episode
        air_date
      }
    }
  }
`;

export const GET_ALL_EPISODES = gql`
  query {
    episodes {
      results {
        name
        episode
        air_date
      }
    }
  }
`;
