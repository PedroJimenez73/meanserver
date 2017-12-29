var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Proveedor = require('../models/proveedor.js');

// /* Get a todos los presupuestos */
// router.get('/', function(req, res, next) {
//   Proveedor.find(function (err, proveedores) {
//     if (err) return next(err);
//     res.json(proveedores);
//   });
// });

// /* Get presupuesto por id */
router.get('/:id', function(req, res, next) {
  Proveedor.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
    console.log(post);
  });
});

/* Post Presupuesto */
router.post('/', function(req, res, next) {
  Proveedor.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Put Presupuesto */
router.put('/:id', function(req, res, next) {
  Proveedor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Delete Presupuesto */
router.delete('/:id', function(req, res, next) {
  Proveedor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;