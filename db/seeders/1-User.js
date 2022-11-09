module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      lastname: 'Иванов',
      firstname: 'Иван',
      middlename: 'Иванович',
      email: 'ivanov.i@mail.ru',
      password: '123',
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
      password: '123',
      federal: 'Уральский федеральрный округ',
      region: 'Курганская область',
      municip: 'Катайчкий район',
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
