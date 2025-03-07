const router = require("express").Router();
const authRoutes = require("./auth.routes");
const themeRoutes = require("./theme.routes");
const questionRoutes = require("./question.routes");
const gameRoutes = require('./game.routes'); 
const formatResponse = require("../utils/formatResponse");

router.use("/theme", themeRoutes);
router.use("/question", questionRoutes);
router.use('/games', gameRoutes); 
router.use("/auth", authRoutes);

//! Обработка всех запросов на несуществующие маршруты (меняем стандартный ответ от express)
router.use("*", (req, res) => {
  res.status(404).json(formatResponse(404, "Not found"));
});

module.exports = router;
