const router = require("express").Router();
const QuestionController = require("../controllers/Question.controller");

router

  .get("/", QuestionController.getAllQuestions)

  .get("/:id/byTheme", QuestionController.getQuestionsByThemeId);

module.exports = router;
