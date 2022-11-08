'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Initiatives', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.STRING
      },
      votes_against: {
        type: Sequelize.INTEGER
      },
      votes_pro: {
        type: Sequelize.INTEGER
      },
      date_end: {
        type: Sequelize.DATE
      },
      level: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      municip: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      UserID: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'Users',
          key: 'id', 
        }
      },
      SphereID: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'Spheres',
          key: 'id', 
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Initiatives');
  }
};