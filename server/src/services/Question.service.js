const { Question } = require("../db/models");

class QuestionService {
  static async getAll() {
    return await Question.findAll();
  }

  static async getByThemeId(id) {
    return await Question.findAll({ where: { themeId: id } });
  }
}

module.exports = QuestionService;
