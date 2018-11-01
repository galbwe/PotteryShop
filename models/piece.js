var mongoose = require('mongoose');

var PieceSchema = new mongoose.Schema({
  name: String,
  category: String,
  photos: [Buffer], //may want to consider having an independent model for images and including by reference into the Piece model
  priceDollars: Number,
  qtyAvailable: Number,
  sku: String,
  description: String,
  colors: String,
  size: String,
  date: {type: Date, default: Date.now}
});

var Piece = mongoose.model('Piece', PieceSchema);

module.exports = Piece;
