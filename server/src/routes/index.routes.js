const router = require('express').Router(); 
const authRoutes = require('./auth.routes'); 
const gameRoutes = require('./game.routes'); 
const formatResponse = require('../utils/formatResponse'); 

router.use('/games', gameRoutes); 
router.use('/auth', authRoutes); 

router.use('*', (req, res) => {
  res.status(404).json(formatResponse(404, 'Not found'));
});

module.exports = router;
