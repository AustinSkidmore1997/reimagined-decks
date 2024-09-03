const router = require('express').Router();
const { getAllTech } = require('../../controllers/deck-controller');

router.route('/').get(getAllTech);

module.exports = router;
