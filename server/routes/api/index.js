const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const deckRoutes = require('./deck-routes.js');

router.use('/user', userRoutes);
router.use('/deck', deckRoutes);

module.exports = router;
