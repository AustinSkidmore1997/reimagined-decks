import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($tech1: String!, $tech2: String!) {
    createUser(tech1: $tech1, tech2: $tech2) {
      _id
      
    }
  }
`;

export const CREATE_DECK = gql`
  mutation createDeck($_id: String!, $techNum: Int!) {
    createDeck(_id: $_id, techNum: $techNum) {
      _id
     
    }
  }
`;
