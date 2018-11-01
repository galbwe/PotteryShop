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
mongoose.connect('mongodb://localhost/pottery_shop',
                  { useNewUrlParser: true });
var Piece = require("./models/piece");


// Define routes// Express setup
var app = express();
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(bodyParser());
app.use(express.static('public'))

// LANDING PAGE

app.get("/", function(req, res){
  res.render("index")
})

// INDEX


/*
app.get("/pieces", function(req, res){
  Piece.find({}, function(err, pieces){
    if(err){
      res.send(err);
    } else {
      res.render("index", {pieces: pieces});
    }
  })

})

// NEW AND CREATE

app.get("/pieces/new", function(req, res){
  res.render("new");
})

app.post("/pieces", function(req, res){

  Piece.create(req.body, function(err, piece){
    if(err){
      res.send(err);
    }
    else {
      console.log("posted new piece to database");
      console.log(piece);
      res.redirect("/pieces");
    }
  })

})

// SHOW

app.get('/pieces/:id', function(req, res){
  Piece.findById(req.params.id, function(err, piece){
    if(err){
      res.send(err);
    }
    else {
      res.render("show", {piece: piece});
    }
  })
})

// EDIT AND UPDATE

app.get('/pieces/:id/edit', function(req, res){
  Piece.findById(req.params.id, function(err, piece){
    if(err){
      res.send(err);
    }
    else {
      res.render("edit", {piece: piece});
    }
  })
})

app.put('/pieces/:id', function(req, res){
  Piece.findOneAndUpdate(
    {_id: req.params.id},
    req.body,
    function(err, piece){
      if (err) {
        res.send(err);
      }
      else {
        res.redirect('/pieces/' + piece._id);
      }
    }
  )
})

// DESTROY

app.delete('/pieces/:id', function(req, res){
  Piece.deleteOne(
    {_id: req.params.id},
    function(err){
      if(err){
        res.send(err);
      }
      else {
        res.redirect('/pieces');
      }
    }
  )
})
*/

// run app
app.listen(3000, function(){
  console.log("Server listening on port 3000");
})
