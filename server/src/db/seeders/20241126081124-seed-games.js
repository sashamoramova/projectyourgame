'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert(
      'Games',
      [
        {
          userId: 1,
          score: 900,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          score: 700,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games', null, {});
  }
};
