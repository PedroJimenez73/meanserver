var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var presupuesto = require('./routes/presupuesto');
var proveedor = require('./routes/proveedor');
var proveedorsearch = require('./routes/proveedorsearch');
var proveedorbusca = require('./routes/proveedorbusca');
var factura = require('./routes/factura');

var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/appcompras', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('conectado a la base de datos'))
  .catch((err) => console.error(err));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/presupuestos', express.static(path.join(__dirname, 'dist')));
app.use('/presupuesto', presupuesto);
app.use('/proveedores', express.static(path.join(__dirname, 'dist')));
app.use('/proveedor', proveedor);
app.use('/proveedorsearch', proveedorsearch);
app.use('/proveedorbusca', proveedorbusca);
app.use('/facturas', express.static(path.join(__dirname, 'dist')));
app.use('/factura', factura);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
