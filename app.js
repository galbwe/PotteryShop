var express = require("express"),
    app = express();
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    User = require('./models/user')
    seedDB = require("./seed");


//database setup
mongoose.connect('mongodb://localhost/pottery_app',
                  { useNewUrlParser: true });

//app configuration
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public'));
seedDB();

// configure authentication
session = require("express-session");
app.use(session({
  secret: "Wild boar coffee gives me the jitters!",
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// require routes
routes = {
  index: require("./routes/index"),
  shop: require("./routes/shop"),
}

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});

app.use("/", routes.index);
app.use("/shop", routes.shop);

// run app
app.listen(3000, function () {
  console.log('Server listening on port 3000')
})
