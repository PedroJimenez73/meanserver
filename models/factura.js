var mongoose = require('mongoose');

var FacturaSchema = new mongoose.Schema({
  cliente: String,
  fecha: String,
  items: Object,
  base: Number,
  tipo: Number,
  iva: Number,
  total: Number
});

module.exports = mongoose.model('Factura', FacturaSchema);
