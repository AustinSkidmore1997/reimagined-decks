const { User, Deck } = require('../models');

module.exports = {
  // Create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);

      if (!user) {
        return res.status(400).json({ message: 'Unable to create User' });
      }

      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ message: 'An error occurred while creating the user', error: err });
    }
  },

  // Create a new deck and associate it with a user
  async createDeck(req, res) {
    try {
      const { userId, name } = req.body;

      if (!userId || !name) {
        return res.status(400).json({ message: 'User ID and deck name are required' });
      }

      // Create the new deck
      const newDeck = new Deck({ name });
      await newDeck.save();

      // Update the user to include the new deck
      const user = await User.findByIdAndUpdate(
        userId,
        { $push: { decks: newDeck._id } },
        { new: true }
      ).populate('decks');

      if (!user) {
        return res.status(400).json({ message: 'Unable to update User with new deck' });
      }

      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ message: 'An error occurred while creating the deck', error: err });
    }
  },

  // Get all users
  async getAllUsers(req, res) {
    try {
      const allUsers = await User.find({}).populate('decks');

      if (!allUsers || allUsers.length === 0) {
        return res.status(404).json({ message: 'No Users found' });
      }

      res.status(200).json(allUsers);
    } catch (err) {
      res.status(500).json({ message: 'An error occurred while fetching users', error: err });
    }
  },

  // Get a user by ID
  async getUser(req, res) {
    try {
      const user = await User.findById(req.params.id).populate('decks');

      if (!user) {
        return res.status(404).json({ message: 'No User found with that ID' });
      }

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: 'An error occurred while fetching the user', error: err });
    }
  },
};