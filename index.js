// Parses our HTML and helps us find elements
var cheerio = require("cheerio");
// Makes HTTP request for HTML page
var request = require("request");

var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
