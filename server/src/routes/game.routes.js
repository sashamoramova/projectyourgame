const router = require('express').Router();
const GameController = require('../controllers/Game.controller');
const verifyAccessToken = require('../middleware/verifyAccessToken'); 

router
  .get('/', GameController.getAllGames)
  .get('/:id', GameController.getGameById)
  .post('/', verifyAccessToken, GameController.createGame)
  .put('/:id', verifyAccessToken, GameController.updateGame);

module.exports = router;
