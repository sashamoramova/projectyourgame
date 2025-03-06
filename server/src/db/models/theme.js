"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Question }) {
      Theme.hasMany(Question, {
        foreignKey: "themeId",
      });
    }
  }
  Theme.init(
    {
      themeName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Theme",
    }
  );
  return Theme;
};
