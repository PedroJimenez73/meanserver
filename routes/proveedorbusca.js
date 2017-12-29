var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Proveedor = require('../models/proveedor.js');

router.get('/:nombre/:localidad', function(req,res,next){
  var nombre = req.params.nombre;
  var localidad = req.params.localidad;
  Proveedor.find({$or: [{"nombre":{$regex: nombre}},{"localidad":{$regex: localidad}}]}, function(err, proveedores){
    if (err) return next(err);
    res.json(proveedores);
  })
});

module.exports = router;