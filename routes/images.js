const express = require("express");
const router = express.Router();
const Image = require('../models/recipe')

/* GET home page. */
//define storage for the images

router.get("/recipes/images", function (req, res, next) {
  res.render("images", { title: "images" });
});

module.exports = router;
