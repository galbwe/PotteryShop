var express = require("express"),
    app = express();
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    //might not need models
    //Piece = require("./models/piece"),
    //Users = require("./models/user"),
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

// require routes
routes = {
  index: require("./routes/index"),
  shop: require("./routes/shop"),
}

app.use("/", routes.index);
app.use("/shop", routes.shop);

// run app
app.listen(3000, function () {
  console.log('Server listening on port 3000')
})
