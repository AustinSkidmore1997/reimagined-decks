const { Deck, User } = require('../models')

const resolvers = {
    Query: {
        decks: async () => {
            return Deck.find({});
        },
        users: async (parent, { _id }) => {
            const params = _id ? { _id } : {}
            return User.find(params)
        }
    },
    Mutation: {
        createMatchup: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        createVote: async (parent, { _id, techNum }) => {
            const vote = await Matchup.findOneAndUpdate(
                { _id },
                { $inc: { [`tech${techNum}_votes`]: 1 } },
                { new: true }
            )
            return vote;
        }
    }
}

module.exports = resolvers;