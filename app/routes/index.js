var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../views/index.html'));
});

router.post('/', function (req, res){
  console.log(req.body["message"]);
  // res.setHeader('Content-Type', 'application/json');
  // res.status(200).json({
  //     a:1
  // });
  // res.status(200).json({
  //   a:1
  // })
  res.json({message : "done !"})
});


module.exports = router;
