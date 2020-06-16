var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/alta',(req,res,next)=>{
  res.render('alta_banda',{});
});
module.exports = router;
