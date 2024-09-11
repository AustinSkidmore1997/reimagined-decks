import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      _id
      username
      password
      
    }
  }
`;

export const CREATE_DECK = gql`
  mutation createDeck($_id: String!, $name: String!, $cards: [String] ) {
    createDeck(_id: $_id, name: $name, cards: $cards) {
      _id
     name
     cards
    }
  }
`;
export const ADD_CARD = gql`
  mutation addCard($id: ID!, $addedCard: Card) {
    addCard(id: $id, addedCard: $addedCard){
      cardId
      name
      manaCost
      imageUrl
      cmc
      text
      deckAmount
    }
  }
`;
