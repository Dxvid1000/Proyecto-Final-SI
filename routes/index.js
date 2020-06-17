var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Grupo = require('../models/grupos');


router.get('/', function(req, res, next) {
  res.render('index', { });
});

router.get('/alta',(req,res,next)=>{
  res.render('alta_banda',{});
});

router.post('/grabar',(req,res,next)=>{
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

router.post('/actualizar',(req,res,next)=>{
  //console.log(req);
  Grupo.findOne({'nombreGrupo':req.params.nombreGrupo},(err,data)=>{
    if (err) {
    res.send("Error grupo no encontrado"+err);
  }else{
      res.render('actualizar', {grupo : data});
  }
 });
})

router.post('/elemB',(req,res,next)=>{
  //console.log(req);
  Grupo.findOne({'nombreGrupo':req.params.nombreGrupo},(err,data)=>{
    if (err) {
    res.send("Error grupo no encontrado"+err);
  }else{
      res.render('elemB', {grupo : data});
  }
 });
})


router.get('/borrar',(req,res,next)=>{
  Grupo.find({},(err,data)=>{
    if (err) {
      res.send("Error al seleccionar"+err);
    }else{
        res.render('grupos', {grupos : data});
    }
  });
})

/router.post('/borrado',(req,res,next)=>{
  var nombreGrupo=req.body.nombreGrupo
  
  Grupo.findOneAndDelete({'nombreGrupo': nombreGrupo },function(err,data){
    if (err) {
      res.send(err);
    }
    res.render('ver_grupo',data)
  });
});


router.post('/nuevosDatos',(req,res,next)=>{
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
  
  Grupo.findOneAndUpdate({'nombreGrupo':nombreGrupo},{
  'nombreGrupo': nombreGrupo,
  'numIntegrantes': numIntegrantes,
  'genero': genero,
  'nacionalidad': nacionalidad,
  'anioCreacion': anioCreacion,
  'anioSeparacion': anioSeparacion
  
  },(err,data)=>{
  if (err) {
  res.send("Error al guardar"+err);
  }else{
  res.render('ver_grupo',grupo)
  }
  });
  });
  


module.exports = router;
