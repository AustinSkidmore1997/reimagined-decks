import { gql } from '@apollo/client';

export const QUERY_DECK = gql`
  query deck {
    deck {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  query user($_id: String) {
    user(_id: $_id) {
      _id
      
    }
  }
`;
