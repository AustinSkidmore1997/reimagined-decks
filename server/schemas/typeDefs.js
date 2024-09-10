const typeDefs = /* GraphQL */`
  type Deck {
    _id: ID
    name: String
    cards: [Card]
  }

  type Card {
    cardId: String
    name: String
    manaCost: String
    imageUrl: String
    cmc: String
    text: String
  }

  type User {
    _id: ID
    username: String
    password: String
    decks: [Deck]
  }

  type Query {
    decks: [Deck]
    users(_id: String): [User]
  }

  type Mutation {
    createUser(username: String!, password: String!): User
    createDeck(id: ID!, name: String!): User
  }
`;

module.exports = typeDefs;
