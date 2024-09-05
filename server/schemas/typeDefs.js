const typeDefs = /* GraphQL */`
  type Deck {
    _id: ID!
    name: String!
    cards: Array
  }

  type User {
    _id: ID!
    username: String!
    password: String!
    decks: Array
  }

  type Query {
    deck: [Deck]
    users(_id: String): [User]
  }

  type Mutation {
    createUser(username: String!, password: String!): User
    createDeck(_id: String!, name: String!): User
  }
`;

module.exports = typeDefs;
