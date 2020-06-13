var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  request('https://expressdxv.herokuapp.com/autos', (error, response, body) =>{
      res.render('datos',{data:JSON.parse(body)});      
  });
});


router.get('/:_id', (req, res, next)=>{ //5ed53be9f99af217f4b584cb
  request('https://expressdxv.herokuapp.com/autos/'+req.params._id, (error, response, body) =>{       
    res.render('solo',{'datos':JSON.parse(body)});
});
});

module.exports = router;
