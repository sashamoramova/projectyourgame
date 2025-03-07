"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Themes",
      [
        {
          themeName: "Животные",
        },
        {
          themeName: "Еда",
        },
        {
          themeName: "Транспорт",
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Themes", null, {});
  },
};
