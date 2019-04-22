var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 9000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

// app.use(routes);

app.use(function(req,res){
    console.log('Time',Date.now());
});

app.listen(PORT, function(){
    console.log("Server listening on http://localhost" + PORT);
});
