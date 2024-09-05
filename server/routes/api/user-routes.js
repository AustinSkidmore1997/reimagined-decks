const router = require('express').Router();
const {
  getAllUsers,
  createUser,
  getUser,
  createDeck,
} = require('../../controllers/user-controller');

router.route('/').get(getAllUsers);
router.route('/').post(createUser);
router.route('/:id').get(getUser);
router.route('/:id').put(createDeck);

module.exports = router;
