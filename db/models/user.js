const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Initiative }) {
      this.hasMany(Initiative);
    }
  }
  User.init({
    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    middlename: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    federal: DataTypes.STRING,
    region: DataTypes.STRING,
    municip: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
