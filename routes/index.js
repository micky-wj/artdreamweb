var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET information page. */
router.get('/information', function(req, res, next) {
  res.render('information');
});

/* GET support page. */
router.get('/support', function(req, res, next) {
  res.render('support');
});

module.exports = router;
