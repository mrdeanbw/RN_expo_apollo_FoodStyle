import gql from "graphql-tag";

export const CARDS_QUERY = gql`
  query {
    cards {
      id
      name
    }
  }
`;
