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
