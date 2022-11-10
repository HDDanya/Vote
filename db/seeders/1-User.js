module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      lastname: 'Иванов',
      firstname: 'Иван',
      middlename: 'Иванович',
      email: 'ivanov.i@mail.ru',
      password: '$2b$10$9uY4NEKnGS6WFEBARGlRnu4io0JbP1qGAzjG6mJc8rRDYzbgu4UVu',
      federal: 'Южный федеральрный округ',
      region: 'Республика Адыгея',
      municip: 'Адыгея',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      lastname: 'Васильева',
      firstname: 'Елена',
      middlename: 'Александровна',
      email: 'Vas.e@mail.ru',
      password: '$2b$10$9uY4NEKnGS6WFEBARGlRnu4io0JbP1qGAzjG6mJc8rRDYzbgu4UVu',
      federal: 'Уральский федеральрный округ',
      region: 'Курганская область',
      municip: 'Катайчкий район',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      lastname: 'Федорова',
      firstname: 'Елизавета',
      middlename: 'Александровна',
      email: 'Liz.e@mail.ru',
      password: '$2b$10$9uY4NEKnGS6WFEBARGlRnu4io0JbP1qGAzjG6mJc8rRDYzbgu4UVu',
      federal: 'Дальневосточный федеральрный округ',
      region: 'Забайкальский край',
      municip: 'Иркутск',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
