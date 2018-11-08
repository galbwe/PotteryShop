var express = require("express");
var router  = express.Router();
//var middleware = require("../middleware");

// LANDING PAGE

router.get('/', function (req, res) {
  res.render('index')
})

module.exports = router;
