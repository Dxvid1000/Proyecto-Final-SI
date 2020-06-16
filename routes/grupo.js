var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Grupo = require('../models/grupos');

router.get('/',(req,res,next)=>{
  Grupo.find({},(err,datos)=>{
      if(err)res.status(400).json({mensaje:"Error en Api"});
      else res.status(200).json(datos);
    });
  });
  
  router.get('/:grupoId', (req, res, next)=>{
    Grupo.findOne({'_id':req.params.grupoId},(err,datos)=>{
      if(datos == null){
        res.status(404).json({"mensaje":"No encontrado"});
      }else{
        res.status(200).json(datos);
      }
    });
  });
  
  router.post('/',(req, res, next)=>{ 
      var grupo=Grupo({
      nombreGrupo: req.body.nombreGrupo,
      numIntegrantes: req.body.numIntegrantes,
      genero: req.body.genero,
      nacionalidad: req.body.nacionalidad,
      anioCreacion: req.body.anioCreacion,
      anioSeparacion: req.body.anioSeparacion
      });
  
      grupo.save((err,datos)=>{
        if(err){
          res.status(404).json({mensaje:"Error al guardar"});
        }else{
          res.status(201).json(datos);
        }
      });
  
  });
  
  router.post('/:grupoId',(req, res, next)=>{
    res.status(404).json({mensaje:"Operacion no permitida"});
  });
  
  router.delete('/',(req, res, next)=>{
    res.status(405).json({mensaje:"Accion no permitida"});
  });
  
  router.delete('/:grupoId',(req, res, next)=>{
    Auto.findOneAndDelete({'_id':req.params.grupoId},(err, datos)=>{
      if(err){
        res.status(404).json(err);
      }else{
        res.status(200).json(datos);
      }
    });
  });
  
  module.exports = router;