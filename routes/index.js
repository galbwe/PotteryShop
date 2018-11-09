var express = require("express"),
    router  = express.Router(),
    passport = require("passport"),
    User = require("../models/user");
//var middleware = require("../middleware");

// LANDING PAGE

router.get('/', function (req, res) {
  res.render('index')
})

// login routes
router.get('/login', function (req, res) {
  res.render('login');
})

router.post('/login', passport.authenticate("local",
  {
    successRedirect: "/",
    failureRedirect: "/login",
  }), function(){}
);

// register routes
router.get('/register', function (req, res) {
  res.render('register');
})

router.post('/register', function (req, res) {
  firstName = req.body.firstName.trim();
  lastName = req.body.lastName.trim();
  name = firstName + " " + lastName;
  var newUser = new User({
    username: req.body.username, //username is the user's email address
    name: name,
    cart: [],
    purchases: [],
  });
  User.register(newUser, req.body.password, function(err, user){
    if(err){
      console.log(err);
      res.redirect('/register');
    }
    passport.authenticate("local")(req, res, function(){
      console.log(req.body);
      res.redirect("/");
    })
  })
})

// logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect("/");
})

module.exports = router;
