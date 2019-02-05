// basic npm packages we've used in class: express and path
var express = require("express");
var path = require("path");
var exphbs = require("express-handlebars");


var orm = require("./config/orm.js");

//use express and parse request body as json
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 8080;























app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});



