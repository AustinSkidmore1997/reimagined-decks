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
            try {
                // Create or update the card
                const newCard = new Card(addedCard);
                const savedCard = await newCard.save();
                
                // Add card to deck
                const updatedDeck = await Deck.findByIdAndUpdate(
                  deckId,
                  { $push: { cards: savedCard._id } },
                  { new: true }
                ).populate('cards');
        
                return updatedDeck;
              } catch (error) {
                console.error('Error adding card to deck:', error);
                throw new Error('Error adding card to deck');
              }
            }

    }
}



module.exports = resolvers;