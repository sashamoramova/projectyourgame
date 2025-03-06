"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme }) {
      Question.belongsTo(Theme, { foreignKey: "themeId" });
    }
  }
  Question.init(
    {
      body: DataTypes.STRING,
      rightAnswer: DataTypes.STRING,
      themeId: DataTypes.INTEGER,
      cost: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
