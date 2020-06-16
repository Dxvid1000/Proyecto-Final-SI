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
  var anioCreacion=req.body.anioCreacion;
  var anioSeparacion=req.body.anioSeparacion;
  var grupo = Grupo(
    {
      nombreGrupo: nombreGrupo,
      numIntegrantes: numIntegrantes,
      genero: genero,
      nacionalidad: nacionalidad,
      anioCreacion: anioCreacion,
      anioSeparacion: anioSeparacion
    }
  );
  grupo.save((err,data)=>{
    if(err) res.send('Error al guardar los datos');
    else res.render('ver_grupo',data);
  })
});
router.get('/todos',(req,res,next)=>{
Grupo.find({},(err,data)=>{
  if (err) {
    res.send("Error al guardar"+err);
  }else{
      res.render('ver_grupos', {grupos : data});
  }
});
});
router.get('/actualizar',(req,res,next)=>{
  console.log(req.body);
  Grupo.findOne({'nombreGrupo':req.params.nombreGrupo},(err,datos)=>{
    if (err) {
    res.send("Error al guardar"+err);
  }else{
    var nombreGrupo=req.body.nombreGrupo;
    var numIntegrantes=req.body.numIntegrantes;
    var genero=req.body.genero;
    var nacionalidad=req.body.nacionalidad;
    var anioCreacion=req.body.anioCreacion;
    var anioSeparacion=req.body.anioSeparacion;
      res.render('actualizar', {grupos : data});
  }
 });
})

module.exports = router;
