const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sphere extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({Initiative}) {
      this.hasMany(Initiative,{ foreignKey: 'SphereID' })
    }
  }
  Sphere.init({
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Sphere',
  });
  return Sphere;
};
