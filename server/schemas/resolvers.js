const { Deck, User } = require('../models');
const cardSchema = require('../models/Card');

const resolvers = {
    Query: {
        decks: async () => {
            return Deck.find();
        },
        user: async (parent, { _id }) => {
            const params = _id ? { _id } : {}
            return User.find(params)
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
//         addCard: async (parent, {id, addedCard}) => {
//             const addOne = false;
//             const deck = await Deck.findById( id );
//             deck.cards.map(async (card) => {
//             if (card.id !== addedCard.id){

//            } else {
//                addOne = true;
//             } 
//             const newCard = await cardSchema.create(addedCard);
//             console.log(newCard);
//             if (addOne = true) {
//                 newCard.deckAmount.value = newCard.deckAmount.value + 1;
//             }
            
//             const updatedDeck = await Deck.findByIdAndUpdate(
//                 id,
//                 { $push: { cards: newCard } },
//                 { new: true }
//             )
//             return updatedDeck;
//         })}
    }
}

module.exports = resolvers;