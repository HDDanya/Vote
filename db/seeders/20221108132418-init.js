'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Initiatives', [{
      title: 'Какой фрукт является объектом раздора? ',
      body: 'Яблоко',
      UserID: 1,
      SphereID: 1,
      createdAt: new Date(),
      updatedAt: new Date(),

    }, {
      title: 'привет',
      body: 'Андрей',
      UserID: 1,
      SphereID: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'хелловпвпвиавиоьвлпшвшилшвшившоиу',
      body: 'ыпвапкплкеошокеиогиошкошикошикошоикошиоиешоик',
      UserID: 1,
      SphereID: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ], {});
  },


  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
