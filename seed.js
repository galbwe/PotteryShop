var mongoose = require('mongoose'),
    Piece = require('./models/piece'),
    User = require('./models/user'),
    seedData = require('./seed_data'),
    pieces = seedData.pieces;
    users = seedData.users;

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
      console.log('wrote pieces to database')
    }
  })

  //add users to database
  User.insertMany(users, function(err, u){
    if(err){
      console.log(err);
    }
    else {
      console.log('wrote users to database');
    }
  })
};

module.exports = seedDB;
