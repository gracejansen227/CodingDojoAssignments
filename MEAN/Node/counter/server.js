
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
  if(req.session.count == null){
    req.session.count =1;
  }
  else {
    req.session.count += 1;
  }
 res.render("index",  {count: req.session.count});
})
// post route for adding a user
app.post('/add', function(req, res) {
 console.log("POST DATA", req.body);
 req.session.count++
 console.log(req.session.count);

 res.redirect('/');
});

app.post('/reset', function(req, res) {

    req.session.count = 0
    console.log(req.session.count);
    return res.redirect('/')

});

app.listen(8000, function() {
 console.log("listening on port 8000");
});
