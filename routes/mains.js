// The root route renders our only view
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/mains", function (req, res, next) {
  res.render("mains", { title: "Main" });
});

module.exports = router;
