var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  username: String, //really email
  password: String,
  cart: [{type: mongoose.Schema.Types.ObjectId, ref: 'Piece'}],
  purchases: [{type: mongoose.Schema.Types.ObjectId, ref: 'Piece'}],
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
