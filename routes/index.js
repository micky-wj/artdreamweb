var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('project');
});

/* GET information page. */
router.get('/information', function(req, res, next) {
  res.render('information');
});

/* GET support page. */
router.get('/support', function(req, res, next) {
  res.render('support');
});

/* GET newslist page. */
router.get('/newslist/:id', function(req, res, next) {
  res.render('newslist_'+req.params.id);
});

/* GET newslist default page. */
router.get('/newslist', function(req, res, next) {
  res.render('newslist_p1');
});

/* GET news page. */
router.get('/news/:id', function(req, res, next) {
  res.render('news_'+req.params.id);
});

module.exports = router;