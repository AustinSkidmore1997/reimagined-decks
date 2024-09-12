const { Deck, User } = require('../models');

// Get all decks
const getAllDecks = async (req, res) => {
  try {
    const decks = await Deck.find().populate('cards'); 
    res.status(200).json(decks);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve decks', error: err });
  }
};

// Get a specific deck by ID
const getDeck = async (req, res) => {
  try {
    const deck = await Deck.findById(req.params.id).populate('cards');
    if (!deck) {
      return res.status(404).json({ message: 'Deck not found' });
    }
    res.status(200).json(deck);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve deck', error: err });
  }
};

// Create a new deck
const createDeck = async (req, res) => {
  try {
    const { name, userId } = req.body;

    if (!name || !userId) {
      return res.status(400).json({ message: 'Name and userId are required' });
    }

    const newDeck = new Deck({ name });
    await newDeck.save();

   
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: { decks: newDeck._id } },
      { new: true }
    ).populate('decks');

    res.status(201).json(updatedUser); 
  } catch (err) {
    res.status(500).json({ message: 'Failed to create deck', error: err });
  }
};


const updateDeck = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedDeck = await Deck.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedDeck) {
      return res.status(404).json({ message: 'Deck not found' });
    }

    res.status(200).json(updatedDeck);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update deck', error: err });
  }
};

module.exports = { getAllDecks, getDeck, createDeck, updateDeck };