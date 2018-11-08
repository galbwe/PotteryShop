var mongoose = require('mongoose'),
    Piece = require('./models/piece'),
    seedData = require('./seed_data'),
    pieces = seedData.pieces;

function seedDB() {
  //delete everything from the database
  Piece.deleteMany({}, function(err){
    if(err){
      console.log(err);
    }
  })

  //add pieces to the database
  Piece.insertMany(pieces, function(err, p){
    if(err){
      console.log(err)
    }
    else {
      console.log('wrote to database')
    }
  })
};

module.exports = seedDB;
