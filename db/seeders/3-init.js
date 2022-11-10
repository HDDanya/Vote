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
      title: 'Установка плошадки',
      body: 'Андрей',
      UserID: 1,
      SphereID: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Покупка авто',
      body: 'Тойота Лэнд Крузер',
      UserID: 1,
      SphereID: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Initiatives', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
