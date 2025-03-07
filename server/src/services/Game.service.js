const { Game, User } = require('../db/models');

class GameService {
  //* Получить все игры
  static async getAll() {
    return await Game.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'username', 'email'],
        },
      ],
    });
  }

  //* Найти игру по ID
  static async getById(id) {
    return await Game.findByPk(id, {
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'username', 'email'],
        },
      ],
    });
  }

  //* Создать новую игру
  static async create(data) {
    const newGame = await Game.create(data);
    return await this.getById(newGame.id);
    // return await Game.create(data);
  }

  //* Обновить игру по ID
  static async update(id, data) {
    const game = await this.getById(id);
    if (!game) {
      return null;
    }
    game.score = data.score;
    await game.save();
    return game;
  }
}


module.exports = GameService;
