var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pottery_app',
                  { useNewUrlParser: true });

const PieceSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  price: Number,
  qtyAvailable: Number,
  date: {type: Date, default: Date.now}
});
const Piece = mongoose.model('Piece', PieceSchema);

Piece.insertMany([
  {
    name: 'Watermelon Oil Spot Soup Bowls',
    imageUrl: 'http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p711_i1_w640.jpeg',
    price: 48.00,
    qtyAvailable: 1
  },
  {
    name: 'Blizzard Soup Bowls',
    imageUrl: 'http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p695_i7_w640.jpeg',
    price: 40.00,
    qtyAvailable: 3
  },
  {
    name: 'Wide Rimmed Cornflower Bowl',
    imageUrl: 'http://www.eastridgepottery.com/uploads/3/4/3/9/34391077/s869133620441393559_p732_i1_w473.jpeg',
    price: 96.00,
    qtyAvailable: 1
  }
], function(err){
  if (err) {
    console.log(err);
  }
  else {
    console.log('successfully inserted test data!')
  }
})
