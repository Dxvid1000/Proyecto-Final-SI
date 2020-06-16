var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/', function(req, res, next) {
  res.render('index', { });
});

router.post('/buscar', (req, res, next) => {
  console.log(req.body.idA);
  request('https://proyectofinalsi.herokuapp.com/grupo/'+req.body.idA, (error, response, body) =>{       
    res.render('solo',{'datos':JSON.parse(body)});
});
});

module.exports = router;
