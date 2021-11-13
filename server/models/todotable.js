'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todotable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  todotable.init({
    title: DataTypes.STRING,
    isDone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'todotable',
  });
  return todotable;
};