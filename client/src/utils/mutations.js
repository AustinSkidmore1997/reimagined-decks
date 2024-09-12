import { gql } from '@apollo/client';

// Mutation to create a user
export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
    }
  }
`;

// Mutation to create a deck
export const CREATE_DECK = gql`
  mutation createDeck($userId: ID!, $name: String!) {
    createDeck(id: $userId, name: $name) {
      _id
      name
      cards {
        _id
        name
        
      }
    }
  }
`;

// Mutation to add a card to a deck
export const ADD_CARD = gql`
  mutation addCard($deckId: ID!, $addedCard: CardInput!) {
    addCard(deckId: $deckId, addedCard: $addedCard) {
      _id
      name
      card {
        _id
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
        count
      }
    }
  }
`;
