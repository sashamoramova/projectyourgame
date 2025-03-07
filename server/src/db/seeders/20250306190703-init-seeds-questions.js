"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        // Тема 1: Животные
        {
          body: "Как называют детеныша кошки?",
          rightAnswer: "Котёнок",
          themeId: 1,
          cost: 150,
        },
        {
          body: "Кто самый большой зверь на планете?",
          rightAnswer: "Кит",
          themeId: 1,
          cost: 100,
        },
        {
          body: "Как называют жилище муравья?",
          rightAnswer: "Муравейник",
          themeId: 1,
          cost: 200,
        },
        {
          body: "Какая птица символ мира?",
          rightAnswer: "Голубь",
          themeId: 1,
          cost: 250,
        },
        {
          body: "Самое быстрое животное?",
          rightAnswer: "Гепард",
          themeId: 1,
          cost: 300,
        },

        // Тема 2: Еда
        {
          body: "Что делают из молока?",
          rightAnswer: "Творог",
          themeId: 2,
          cost: 100,
        },
        {
          body: "Какой фрукт бывает кислым и сладким?",
          rightAnswer: "Яблоко",
          themeId: 2,
          cost: 150,
        },
        { body: "Что едят ложкой?", rightAnswer: "Суп", themeId: 2, cost: 200 },
        {
          body: "Какая ягода растет в лесу?",
          rightAnswer: "Земляника",
          themeId: 2,
          cost: 250,
        },
        {
          body: "Как называют сладкое блюдо в конце обеда?",
          rightAnswer: "Десерт",
          themeId: 2,
          cost: 300,
        },

        // Тема 3: Транспорт
        {
          body: "На чем ездят по рельсам?",
          rightAnswer: "Поезд",
          themeId: 3,
          cost: 100,
        },
        {
          body: "Что летает в небе?",
          rightAnswer: "Самолет",
          themeId: 3,
          cost: 150,
        },
        {
          body: "Как называется городской транспорт на колесах?",
          rightAnswer: "Автобус",
          themeId: 3,
          cost: 200,
        },
        {
          body: "Что плавает по морю?",
          rightAnswer: "Корабль",
          themeId: 3,
          cost: 250,
        },
        {
          body: "Чем управляет водитель?",
          rightAnswer: "Руль",
          themeId: 3,
          cost: 300,
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
