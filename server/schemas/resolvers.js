const { Deck, User } = require('../models')

const resolvers = {
    Query: {
        decks: async () => {
            return Deck.find([]);
        },
        users: async (parent, { _id }) => {
            const params = _id ? { _id } : {}
            return User.find(params)
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        createDeck: async (parent, { _id, name }) => {
            const deck = await User.findOneAndUpdate(
                { _id },
                { name },
                { new: true }
            )
            return deck;
        }
    }
}

module.exports = resolvers;