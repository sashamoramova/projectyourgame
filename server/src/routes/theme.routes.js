const router = require("express").Router();
const ThemeController = require("../controllers/Theme.controller");

router

  .get("/", ThemeController.getAllThemes)

  .get("/:id", ThemeController.getThemeById);

module.exports = router;
