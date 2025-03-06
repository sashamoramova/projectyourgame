const QuestionService = require("../services/Question.service");
const formatResponse = require("../utils/formatResponse");
const isValidId = require("../utils/isValidId");

class QuestionController {
  static async getAllQuestions(req, res) {
    try {
      const questions = await QuestionService.getAll();

      if (questions.length === 0) {
        return res
          .status(200)
          .json(formatResponse(200, "Вопросы не найдены", []));
      }

      res.status(200).json(formatResponse(200, "Вопросы получены", questions));
    } catch ({ message }) {
      console.error(message);

      res
        .status(500)
        .json(formatResponse(500, "Ошибка на сервере!", null, message));
    }
  }

  static async getQuestionsByThemeId(req, res) {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, "Неверный ID темы"));
    }
    try {
      const questions = await QuestionService.getByThemeId(Number(id));
      if (questions.length === 0) {
        return res.status(200).json(formatResponse(200, "Вопросы не найдены"));
      }
      res.status(200).json(formatResponse(200, "Вопросы получены", questions));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Ошибка на сервере", null, message));
    }
  }
}

module.exports = QuestionController;
