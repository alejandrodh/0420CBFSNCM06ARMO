'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
    favorite_movie_id: DataTypes.INTEGER
  }, {});
  Actor.associate = function(models) {
    // associations can be defined here
  };
  return Actor;
};