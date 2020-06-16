var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Grupo = require('../models/grupos');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/alta',(req,res,next)=>{
  res.render('alta_banda',{});
});
router.post('/grabar',(req,res,next)=>{
  console.log(req.body);
  var nombreGrupo=req.body.nombreGrupo;
  var numIntegrantes=req.body.numIntegrantes;
  var genero=req.body.genero;
  var nacionalidad=req.body.nacionalidad;
  var añocCreación=req.body.añoCreación;
  var añoSeparación=req.body.añoSeparación;
  var grupo = Grupo(
    {
      nombreGrupo: nombreGrupo,
      numIntegrantes: numIntegrantes,
      genero: genero,
      nacionalidad: nacionalidad,
      añoCreación: añoCreación,
      añoSeparación: añoSeparación
    }
  );
  grupo.save((err,data)=>{
    if(err) res.send('Error al guardar los datos');
    else res.render('alta ok',data);
  })
});
module.exports = router;
