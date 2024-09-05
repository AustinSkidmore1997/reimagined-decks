const router = require('express').Router();
const { getDeck, getAllDecks } = require('../../controllers/deck-controller');

router.route('/').get(getAllDecks);

module.exports = router;
