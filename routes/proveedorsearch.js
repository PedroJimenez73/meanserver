var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Proveedor = require('../models/proveedor.js');

router.get('/:busqueda', function(req,res,next){
  Proveedor.find({"nombre":{$regex: req.params.busqueda, $options: 'i'}}, function(err, proveedores){
    if (err) return next(err);
    res.json(proveedores);
  })
});

module.exports = router;