const router = require("express").Router();
const QuestionController = require("../controllers/Question.controller");

router

  .get("/", QuestionController.getAllQuestions)

  .get("/byTheme/:id", QuestionController.getQuestionsByThemeId);

module.exports = router;
