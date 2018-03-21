// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

var mongoose = require('mongoose');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.

var BabySchema = new mongoose.Schema({
 type: {type:String, required: true, maxLength: 100},
 name: {type: String, required: true},
 food: {type: String, required: true},
})
mongoose.model('Baby', BabySchema); // We are setting this Schema in our Models as 'User'
var Baby = mongoose.model('Baby') // We are retrieving this Schema from our Models, named 'User'

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Routes
// Root Request
app.get('/', function(req, res) {
  Baby.find({}, (err, babies) => {
    if(err){
      console.log("There is an error here fix it!");
    } else {
      console.log("This should bring me right back to index page")
      console.log(babies);
      res.render('index', {babies: babies});
    }

  })

})

app.get('/new', function(req, res) {
        res.render('new');

    })


app.post('/new', function(req, res) {
    console.log("POST DATA", req.body);
    var baby = new Baby({type: req.body.type, name: req.body.name, food: req.body.food});

    baby.save(function(err){
      if(err){
        console.log('something is wrong');
      } else {
        console.log('Added a baby!');
        res.redirect('/');
      }
    })

})

app.get('/show/:id', function(req, res) {
    console.log(req.params);
    let id = req.params.id;
    Baby.find({_id: id}, (err, baby) => {
      if(err){
        console.log("There is an error here fix it!");
      } else {
        console.log("This should bring me to the right quotes page")
        console.log(baby);
        res.render('show', {baby: baby});
      }
    })
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
})

app.get('/edit/:id', function(req, res) {
    console.log(req.params);
    let id = req.params.id;
    Baby.find({_id: id}, (err, baby) => {
      if(err){
        console.log("There is an error here fix it!");
      } else {
        console.log("This should bring me to the right quotes page")
        console.log(baby);
        res.render('edit', {baby: baby});
      }
    })

})

app.post('/edit/:id', function(req, res) {
    console.log("POST DATA", req.params);
    let id = req.params.id;
   Baby.update({_id: id}, {name: req.body.name, type: req.body.type, food: req.body.food}, function(err, status){
     console.log(status);
       res.redirect('/');
   });


})

app.get('/delete/:id', function(req, res) {
    console.log("POST DATA", req.params);
    let id = req.params.id;
   Baby.remove({_id: id}, function(err, status){
     console.log(status);
       res.redirect('/');
   });

})



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})

mongoose.connect('mongodb://localhost/dashboard');
