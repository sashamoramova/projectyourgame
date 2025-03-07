const GameService = require('../services/Game.service');
const isValidId = require('../utils/isValidId');
const GameValidator = require('../utils/Game.validator');
const formatResponse = require('../utils/formatResponse');

class GameController {
  /**
   * Получение списка всех игр
   */
  static async getAllGames(req, res) {
    try {
      const games = await GameService.getAll();

      // console
      if (games.length === 0) {
        return res.status(200).json(formatResponse(200, 'No games found', []));
      }

      res.status(200).json(formatResponse(200, 'success', games));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, 'Internal server error', null, message));
    }
  }

  /**
   * Получение задачи по идентификатору
   */
  static async getGameById(req, res) {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, 'Invalid game ID'));
    }

    try {
      const game = await GameService.getById(+id);

      if (!game) {
        return res
          .status(404)
          .json(formatResponse(404, `Game with id ${id} not found`));
      }

      res.status(200).json(formatResponse(200, 'success', game));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, 'Internal server error', null, message));
    }
  }

  /**
   * Создание новой 
   */
  static async createGame(req, res) {
    const { score } = req.body;
    const { user } = res.locals;

    const { isValid, error } = GameValidator.validate({ score });
    if (!isValid) {
      return res
        .status(400)
        .json(formatResponse(400, 'Validation error', null, error));
    }

    try {
      const newGame = await GameService.create({
        score,
        userId: user.id,
      });

      if (!newGame) {
        return res
          .status(400)
          .json(formatResponse(400, 'Failed to create new game'));
      }

      // //решение по верстке
      // const taskWithAuthor = await TaskService.getById(newTask.id);
      // //


      res.status(201).json(formatResponse(201, 'success', newGame));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, 'Internal server error', null, message));
    }
  }

  /**
   * Обновление существующей игры
   */
  static async updateGame(req, res) {
    const { id } = req.params;
    const { score } = req.body;
    const { user } = res.locals;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, 'Invalid game ID'));
    }

    // //? Валидируем новые данные задачи
    // const { isValid, error } = TaskValidator.validate({ title, body });
    // if (!isValid) {
    //   return res
    //     .status(400)
    //     .json(formatResponse(400, 'Validation error', null, error));
    // }

    try {
      const existingGame = await GameService.getById(+id);
      if (!existingGame) {
        return res.status(404).json(formatResponse(404, 'Game not found'));
      }

      // //? Проверяем права доступа: только автор может редактировать задачу
      // if (existingTask.author_id !== user.id) {
      //   return res
      //     .status(400)
      //     .json(
      //       formatResponse(400, "You don't have permission to update this task")
      //     );
      // }

      //* Обновляем и возвращаем обновленную версию
      const updatedGame = await GameService.update(+id, { score });
      res.status(200).json(formatResponse(200, 'success', updatedGame));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, 'Internal server error', null, message));
    }
  }

  
  
}

module.exports = GameController;
