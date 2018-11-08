var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  cart: [{type: mongoose.Schema.Types.ObjectId, ref: 'Piece'}],
  purchases: [{type: mongoose.Schema.Types.ObjectId, ref: 'Piece'}],
});

module.exports = mongoose.model('User', UserSchema);
