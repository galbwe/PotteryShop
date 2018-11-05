var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

// Express setup
var app = express();
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(bodyParser());
app.use(express.static('public'))

// Mongoose setup
mongoose.connect('mongodb://localhost/pottery_app',
                  { useNewUrlParser: true });
var Piece = require("./models/piece");


// Define routes// Express setup
var app = express();
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(bodyParser());
app.use(express.static('public'))

// LANDING PAGE

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/shop', function (req, res) {
  // get unique categories from database
  Piece.aggregate([
    { $sort: { category: 1, photos: 1 } },
    { $group:
       {
         _id: '$category',
         photos: { $first: '$photos' }
       } }
  ], function (err, result) {
    if (err) {
      console.log(err)
    } else {
      result = result.filter(function (p) {
        return (p._id !== null)
      })
      result = result.map(function (p) {
        p.photo = p.photos[0]
        delete p.photos
        return p
      })
      res.render('shop', { categories: result })
    }
  })
})

app.get('/shop/:category', function (req, res) {
  Piece.find({
    category: req.params.category
  },
  { photos: 1, name: 1, priceDollars: 1 },
  function (err, pieces) {
    if (err) {
      console.log(err)
    } else {
      res.render('category',
        { category: req.params.category,
          pieces: pieces })
    }
  })
})

app.get('/shop/:category/show/:item_id', function (req, res) {
  Piece.findById(req.params.item_id)
    .then(function (piece) {
      res.render('piece', { piece: piece, category: req.params.category })
    })
})

// run app
app.listen(3000, function () {
  console.log('Server listening on port 3000')
})
