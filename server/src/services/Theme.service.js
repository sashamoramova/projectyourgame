const { Theme } = require("../db/models");

class ThemeService {
  static async getAll() {
    return await Theme.findAll();
  }

  static async getById(id) {
    return await Theme.findByPk(id);
  }
}

module.exports = ThemeService;
