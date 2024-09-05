const { User } = require('../models');

module.exports = {
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Unable to create User' });
    }

    res.status(200).json(User);
  },
  async createDeck(req, res) {
    const deck = await User.findOneAndUpdate(
      { _id: req.body.id },
      { name: req.body.name },
      { new: true }
    );

    if (!deck) {
      return res.status(400).json({ message: 'Unable to create Deck' });
    }

    res.status(200).json(vote);
  },
  async getAllUsers(req, res) {
    const allUsers = await User.find({});

    if (!allUsers) {
      return res.status(400).json({ message: 'No Users found' });
    }

    res.status(200).json(allUsers);
  },
  async getUser({ params }, res) {
    const user = await User.findOne({ _id: params.id });

    if (!user) {
      return res.status(400).json({ message: 'No User found by that id' });
    }

    res.status(200).json(user);
  },
};
