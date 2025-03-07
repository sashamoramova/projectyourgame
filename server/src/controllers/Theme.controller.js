const ThemeService = require("../services/Theme.service");
const formatResponse = require("../utils/formatResponse");
const isValidId = require("../utils/isValidId");

class ThemeController {
  static async getAllThemes(req, res) {
    try {
      const themes = await ThemeService.getAll();

      if (themes.length === 0) {
        return res.status(200).json(formatResponse(200, "Темы не найдены", []));
      }

      res.status(200).json(formatResponse(200, "Темы получены", themes));
    } catch ({ message }) {
      console.error(message);

      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async getThemeById(req, res) {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, "Невалидный ID"));
    }

    try {
      const theme = await ThemeService.getById(Number(id));

      if (!theme) {
        return res
          .status(404)
          .json(formatResponse(404, `Темы с id ${id} не найдено`));
      }

      res.status(200).json(formatResponse(200, "Тема найдена", theme));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}

module.exports = ThemeController;
