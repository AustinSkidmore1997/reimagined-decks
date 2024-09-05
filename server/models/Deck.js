const { Schema, model } = require('mongoose');

const deckSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  cards: [{
    _id: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      unique: true
    },
    manaCost: {
      type: String,
    },
    imageUrl: {
      type: String,
      required: false
    },
    cmc: {
      type: Number,
    },
    text: {
      type: String,
      required: true
    }

  }]
});

const Deck = model('Deck', deckSchema);

module.exports = Deck;
