class GameValidator {
  /**
   * Метод для валидации данных задачи.
   * @param {object} data - Объект данных задачи, который необходимо проверить.
   * @param {string} data.title - Заголовок задачи (обязательное поле).
   * @param {string} data.body - Основное содержание задачи (обязательное поле).
   * @returns {object} - Объект, содержащий результат валидации.
   * @returns {boolean} isValid - Флаг, указывающий на валидность данных.
   * @returns {string|null} error - Сообщение об ошибке валидации, если имеется, иначе null.
   */
  static validate(data) {
    const { score } = data; 


    if (!score || typeof score !== 'number' ) {
      return {
        isValid: false, // Данные невалидные
        error: 'score is required and must be a non-empty string.', 
      };
    }

  }
}

module.exports = GameValidator;
