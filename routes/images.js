const express = require("express");
const router = express.Router();
const Image = require('../models/recipe')
const multer = require('multer');

/* GET home page. */
//define storage for the images

const storage = multer.diskStorage({
  //destination for files
  destination: function (request, file, callback) {
    callback(null, "./public/images");
  },

  //add back the extension
  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

//upload parameters for multer
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
});


router.get("/recipes/images", function (req, res, next) {
  res.render("images", { title: "images" });
});

module.exports = router;
