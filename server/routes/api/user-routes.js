const router = require('express').Router();
const {
  getAllUsers,
  createUser,
  getUser,
  createDeck,
} = require('../../controllers/user-controller');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).put(createDeck);

module.exports = router;
