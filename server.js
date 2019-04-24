var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 9010;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

app.use(function(req,res, next){
    console.log('Time',Date.now());
    next();
});

// app.get("/", )
// app.use(routes);

app.get('/', function (req, res) {
    res.send('')
  })


app.listen(PORT, function(){
    console.log("Server listening on http://localhost" + PORT);
});

