import gql from "graphql-tag";

export const CREATE_CARD = gql`
  mutation CREATE_CARD($data: CardInput!) {
    createCard(data: $data) {
      id
      name
    }
  }
`;

export const DELETE_CARD = gql`
  mutation DeleteCard($deleteCardId: ID!) {
    deleteCard(id: $deleteCardId)
  }
`;

export const DUPLICATE_CARD = gql`
  mutation DuplicateCard($duplicateCardId: ID!) {
    duplicateCard(id: $duplicateCardId) {
      id
      name
    }
  }
`;

export const SHARE_CARD = gql`
  mutation ShareCard($shareCardId: ID!) {
    shareCard(id: $shareCardId)
  }
`;
