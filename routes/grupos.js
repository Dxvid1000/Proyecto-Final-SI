var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  request('https://proyectofinalsi.herokuapp.com/grupo', (error, response, body) =>{
      res.render('datos',{data:JSON.parse(body)});      
  });
});


router.get('/:_id', (req, res, next)=>{ 
  request('https://proyectofinalsi.herokuapp.com/grupo/'+req.params._id, (error, response, body) =>{       //5ee92e7f8589ba2f477cd4de
    res.render('solo',{'datos':JSON.parse(body)});
});
});

module.exports = router;
