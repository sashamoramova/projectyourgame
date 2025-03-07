"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Themes",
      [
        {
          themeName: "Кампус",
        },
        {
          themeName: "Онлайн",
        },
        {
          themeName: "Снова бобры",
        },
        {
          themeName: "Опять кайтинг",
        },
        {
          themeName: "Матизы",
        },
        
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Themes", null, {});
  },
};
