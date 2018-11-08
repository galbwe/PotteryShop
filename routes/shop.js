var express = require("express");
var router  = express.Router();
var Piece = require("../models/piece");
//var middleware = require("../middleware");


//main shop page
router.get('/', function (req, res) {
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

router.get('/:category', function (req, res) {
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

router.get('/:category/show/:item_id', function (req, res) {
  Piece.findById(req.params.item_id)
    .then(function (piece) {
      res.render('piece', { piece: piece, category: req.params.category })
    })
})

module.exports = router
