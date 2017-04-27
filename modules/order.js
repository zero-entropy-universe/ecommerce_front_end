/**
 * Created by Mingxiao Guo on 4/15/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
  price: String,
  name: String,
  inventory: String,
  productPhotos: Array,
  description: String
});

module.exports = mongoose.model('Order', orderSchema);