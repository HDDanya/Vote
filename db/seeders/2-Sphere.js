module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Spheres', [{
      title: 'Соц.Защита',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Транспорт и дороги',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Образование и наука',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Здравоохранение',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Патриотическое воспитание',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Интернет, связь и прочие коммуникации',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Окружающая среда',
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
    await queryInterface.bulkDelete('Spheres', null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
