module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Initiatives', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      body: {
        type: Sequelize.TEXT,
      },
      date_end: {
        type: Sequelize.STRING,
        // defaultValue: new Date(this.createdAt.getDate() + 30),
      },
      level: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      UserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      SphereID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Spheres',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Initiatives');
  },
};
