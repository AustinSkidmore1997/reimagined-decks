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
        createDeck: async (parent, { id, name }) => {
            const newDeck = await Deck.create({ name });
            console.log(newDeck);
            const updatedUser = await User.findByIdAndUpdate(
                id,
                { $push: { decks: newDeck } },
                { new: true }
            )
            return updatedUser;
        }
    }
}

module.exports = resolvers;