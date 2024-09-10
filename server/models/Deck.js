const { Schema, model } = require('mongoose');
const cardSchema = require('./Card');

const deckSchema = new Schema({
  name: {
    type: String,
    required: true,
    
  },
  cards: [cardSchema]
});

const Deck = model('Deck', deckSchema);

module.exports = Deck;
