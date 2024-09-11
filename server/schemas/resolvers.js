const { Card, Deck, User } = require('../models');


const resolvers = {
    Query: {
        decks: async () => {
            return Deck.find();
        },
        user: async (parent, { _id }) => {
            const params = _id ? { _id } : {}
            return User.findOne(params)
        },
        users: async () => {
            return User.find();
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
        },
        addCard: async (parent, { deckId, addedCard }) => {
            const newCard = await Card.create(addedCard);
            const updatedDeck = await Deck.findOneAndUpdate(
                deckId,
                {

                    $push: { cards: ObjectId.Parse(newCard.id) }
                },
                {
                    new: true
                }
            )
                .catch((err) => console.error(err));



            return updatedDeck;
        }

    }
}



module.exports = resolvers;