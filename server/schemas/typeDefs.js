const typeDefs = /* GraphQL */`
  type Deck {
    _id: ID
    name: String
    cards: [Card]
  }

  input CardInput {
    _id: ID!
    artist: String
    cmc: Int
    id: String!
    imageUrl: String
    layout: String
    legalities: [String]
    manaCost: String
    multiverseid: String
    name: String
    number: String
    originalText: String
    originalType: String
    printings: [String]
    rarity: String
    set: String
    setName: String
    text: String
    type: String
    types: [String]
    count: Number!
  }

  type Card {
    _id: ID!
    artist: String
    cmc: Int
    id: String!
    imageUrl: String
    layout: String
    legalities: [String]
    manaCost: String
    multiverseid: String
    name: String
    number: String
    originalText: String
    originalType: String
    printings: [String]
    rarity: String
    set: String
    setName: String
    text: String
    type: String
    types: [String]
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
    createUser(username: String!, email:String!, password: String! ): User
    createDeck(id: ID!, name: String!): User
    addCard(id: ID!, addedCard: CardInput!): Card
  }
`;

module.exports = typeDefs;
