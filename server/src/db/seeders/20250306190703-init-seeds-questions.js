'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        // Тема 1: кампус
        {
          body: 'сначала пнуть кота, потом погладить...',
          rightAnswer: 'пропса',
          themeId: 1,
          cost: 150,
        },
        {
          body: 'известная личность в БД',
          rightAnswer: 'Ади',
          themeId: 1,
          cost: 100,
        },
        {
          body: 'хранители - душный гусь и дряблый...',
          rightAnswer: 'голубь',
          themeId: 1,
          cost: 200,
        },
        {
          body: 'для хорошего дня хлопнуть ...',
          rightAnswer: 'ладоши',
          themeId: 1,
          cost: 250,
        },
        {
          body: 'где можно выучить основы JS и TS лучше всего? комната очистки ...',
          rightAnswer: 'кэша',
          themeId: 1,
          cost: 300,
        },

        // Тема 2: онлайн
        {
          body: 'главный в онлайне',
          rightAnswer: 'макс',
          themeId: 2,
          cost: 100,
        },
        {
          body: 'Главный после Макса',
          rightAnswer: 'макс',
          themeId: 2,
          cost: 150,
        },
        {
          body: 'лучшее выступление от Даши',
          rightAnswer: 'новости',
          themeId: 2,
          cost: 200,
        },
        {
          body: 'сколько человек в группе',
          rightAnswer: 'непонятно',
          themeId: 2,
          cost: 250,
        },
        {
          body: 'самый рыжий из нас',
          rightAnswer: 'никита',
          themeId: 2,
          cost: 300,
        },

        // Тема 3: Бобры
        {
          body: 'свалить дерево крепкий бобер может за...',
          rightAnswer: 'ночь',
          themeId: 3,
          cost: 100,
        },
        {
          body: 'кроме звука воды бобров сводит с ума...',
          rightAnswer: 'проект',
          themeId: 3,
          cost: 150,
        },
        {
          body: 'хвостом бобер шлепает...',
          rightAnswer: 'сородичей',
          themeId: 3,
          cost: 200,
        },
        {
          body: 'бобры любят кору деревьев и ... ночью',
          rightAnswer: 'кодить',
          themeId: 3,
          cost: 250,
        },
        {
          body: 'как называется секрет из желез бобра',
          rightAnswer: 'струя',
          themeId: 3,
          cost: 300,
        },
        // Тема 4: кайтинг
        {
          body: 'как называется кольцо отстрела у планки в кайтинге',
          rightAnswer: 'чикенлуп',
          themeId: 4,
          cost: 100,
        },
        {
          body: 'катаются катеры на сноуборде, лыжах, кайтборде и ...',
          rightAnswer: 'двери',
          themeId: 4,
          cost: 150,
        },
        {
          body: 'как называется вращение кайта вокруг своей оси',
          rightAnswer: 'кайтлуп',
          themeId: 4,
          cost: 200,
        },
        {
          body: 'у этого снаряда есть мачта и крылья на нем можно парить над водой',
          rightAnswer: 'гидрофойл',
          themeId: 4,
          cost: 250,
        },
        {
          body: 'как зарабатывают на новое снаряжение кайтеры',
          rightAnswer: 'кодят',
          themeId: 4,
          cost: 300,
        },
        // Тема 5: матизы
        {
          body: 'в какой стране придумали дизайн Матиза',
          rightAnswer: 'италия',
          themeId: 5,
          cost: 100,
        },
        {
          body: 'как переводится от испаского matiz',
          rightAnswer: 'нюанс',
          themeId: 5,
          cost: 150,
        },
        {
          body: 'за что мы так ценим Матизы',
          rightAnswer: 'надежность',
          themeId: 5,
          cost: 200,
        },
        {
          body: 'нежное название Матиза',
          rightAnswer: 'малыш',
          themeId: 5,
          cost: 250,
        },
        {
          body: 'в 2009 году в Великобритании запихнули в матиз ... человека',
          rightAnswer: '23',
          themeId: 5,
          cost: 300,
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
