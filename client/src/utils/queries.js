import { gql } from '@apollo/client';

// Query to fetch a single deck by ID
export const QUERY_DECK = gql`
  query deck($_id: ID!) {
    deck(_id: $_id) {
      _id
      name
      cards {
        _id
        name
        imageUrl
        
      }
    }
  }
`;

// Query to fetch a single user by ID
export const QUERY_USER = gql`
  query user($_id: ID!) {
    user(_id: $_id) {
      _id
      username
      email
      decks {
        _id
        name
        cards {
          _id
          name
          imageUrl
          
        }
      }
    }
  }
`;

// Query to fetch all users
export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      decks {
        _id
        name
        cards {
          _id
          name
          imageUrl
          
        }
      }
    }
  }
`;