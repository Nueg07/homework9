'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    
   
    static associate(models) {
      
    }
  }
  Film.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    year: DataTypes.STRING,
    author: DataTypes.STRING,
    cover: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Film',
  });
  return Film;
};