const typeDefs = /* GraphQL */`
  type Deck {
    _id: ID
    name: String
    cards: [Card]
  }

  input CardInput {
    id: String
    name: String
    manaCost: String
    imageUrl: String
    cmc: String
    text: String
    deckAmount: Int
  }

  type Card {
    id: String
    name: String
    manaCost: String
    imageUrl: String
    cmc: String
    text: String
    deckAmount: Int
  }

  type User {
    _id: ID
    username: String
    email: String!
    password: String
    decks: [Deck]
  }

  type Query {
    decks: [Deck]
    user(_id: String): [User]
    users: [User]
  }

  type Mutation {
    createUser(username: String!, password: String!): User
    createDeck(id: ID!, name: String!): User
    addCard(id: ID!, addedCard: CardInput!): Deck
  }
`;

module.exports = typeDefs;
