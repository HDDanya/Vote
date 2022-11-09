const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Initiative extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Sphere }) {

    }
  }
  Initiative.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    votes_against: DataTypes.INTEGER,
    votes_pro: DataTypes.INTEGER,
    date_end: DataTypes.DATE,
    level: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Initiative',
  });
  return Initiative;
};
