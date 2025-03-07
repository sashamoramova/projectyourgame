'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const password1 = await bcrypt.hash('Qwerty123@', 10);
    const password2 = await bcrypt.hash('Qwerty123@', 10);
    const password3 = await bcrypt.hash('Qwerty123@', 10);
    const password4 = await bcrypt.hash('Qwerty123@', 10);
    const password5 = await bcrypt.hash('Qwerty123@', 10);
    const password6 = await bcrypt.hash('Qwerty123@', 10);

    

    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'Маша',
          email: 'pughjklpa@pupa.com',
          password: password1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Лупа',
          email: 'lupa@lupa.com',
          password: password2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Илья',
          email: 'lua@lupa.com',
          password: password3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Александра',
          email: 'lupgha@lupa.com',
          password: password4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Дима',
          email: 'lhjkupa@lupa.com',
          password: password5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Пупа',
          email: 'pupa@pupa.com',
          password: password6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
