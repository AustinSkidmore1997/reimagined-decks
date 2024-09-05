const { Deck } = require('../models');

module.exports = {
  async getAllDecks(req, res) {
    const allDecks = await Deck.find({});

    if (!allDecks) {
      return res.status(400).json({ message: 'No Decks found' });
    }
    res.status(200).json(allDecks);
  },
  async getDeck({ params }, res) {
    const deck = await Deck.findOne({ _id: params.id });

    if (!deck) {
      return res.status(400).json({ message: 'No Deck found by that id' });
    }

    res.status(200).json(user);
  },
};
