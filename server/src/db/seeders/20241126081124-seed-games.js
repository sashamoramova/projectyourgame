'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert(
      'Games',
      [
        {
          userId: 1,
          score: 900000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          score: 700,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          score: 1100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          score: 700,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          score: 11000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          score: 2500,
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
