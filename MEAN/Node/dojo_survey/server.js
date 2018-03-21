
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
let session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'SecretMessage',
    resave: false,
    saveUninitialized: true,
}))

// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
// post route for adding a user
app.post('/info', function(req, res) {
 console.log("post info here:", req.body);
 // console.log("just the req.name",req.name);
  console.log("req.body.name",req.body.name);
 // req.body.name = name;
 // req.body.

 res.render('result', {info: req.body});
});


app.listen(8000, function() {
 console.log("listening on port 8000");
});
