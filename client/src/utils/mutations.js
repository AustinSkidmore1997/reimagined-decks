import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String! ) {
    createUser(username: $username, email: $email, password: $password ) {
      _id
      username
      email
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
  mutation addCard($id: ID!, $addedCard: CardInput) {
    addCard(id: $id, addedCard: $addedCard){
      artist
      cmc 
      id
      imageUrl
      layout
      legalities
      manaCost
      multiverseid
      name
      number
      originalText
      originalType
      printings
      rarity
      set
      setName 
      text
      type
      types
    }
  }
`;
