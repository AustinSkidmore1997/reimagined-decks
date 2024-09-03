const { Deck } = require('../models');

module.exports = {
  async getAllDecks(req, res) {
    const allDecks = await Deck.find({});

    if (!allDecks) {
      return res.status(400).json({ message: 'No Decks found' });
    }
    res.status(200).json(allDecks);
  },
};
