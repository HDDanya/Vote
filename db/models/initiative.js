const {
  Model,
} = require('sequelize');
const golos = require('./golos');

module.exports = (sequelize, DataTypes) => {
  class Initiative extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({ User, Sphere, Golos }) {
      this.belongsTo(User, { foreignKey: 'id' });
      this.belongsTo(Sphere, { foreignKey: 'id' });
      this.hasMany(Golos)
    }
  }
  Initiative.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    date_end: DataTypes.DATE,
    level: DataTypes.STRING,
    status: DataTypes.STRING,

    UserID: DataTypes.INTEGER,
    SphereID: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Initiative',
  });
  return Initiative;
};
