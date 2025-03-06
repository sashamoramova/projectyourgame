"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate({ User }) {
      Game.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  Game.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Game",
    }
  );
  return Game;
};
