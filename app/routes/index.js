var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../views/index.html'));
});

router.get('/style.css', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../views/style.css'));
});

router.get('/utils.js', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../javascript/utils.js'));
});

router.get('/post.js', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../javascript/post.js'));
});

module.exports = router;
