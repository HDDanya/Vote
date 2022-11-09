'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Golos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Initiative }) {
      this.belongsTo(User),
      this.belongsTo(Initiative)
    }
  }
  Golos.init({
    UserId: DataTypes.INTEGER,
    InitId: DataTypes.INTEGER,
    vote_against: DataTypes.INTEGER,
    vote_pro: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Golos',
  });
  return Golos;
};