// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

var mongoose = require('mongoose');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/1955');
mongoose.Promise = global.Promise;

var PersonSchema = new mongoose.Schema({
 name: {type: String, required: true, minLength: 4},
 birth_year: {type: Number, default: 1955, maxLength: 4},
 });


mongoose.model('Person', PersonSchema);
 // We are setting this Schema in our Models as 'User'

var Person = mongoose.model('Person');// We are retrieving this Schema from our Models, named 'User'


// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());
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
  Person.find({birth_year: 1955}, function(err, people){

    if(err){
      console.log("There is an error GIRLFREN here fix it!");
      re.json({message:"Error", error: err})
    } else {

      console.log(people);
      res.json({message: "Success", data: people})
    }
  });
});

app.get('/new/:name', (req, res) => {
    console.log("POST DATA", req.params);
    var person = new Person({name: req.params.name});

    person.save(function(err){
      if(err){
        console.log('something is wrong');
      } else {
        console.log('Added a new person!');
        res.json({message: "Added a new person!", data: person})
      }
    });

});

app.get('/remove/:name', (req, res) => {
    console.log("Data passed into url", req.params);
    let name = req.params.name;
   Person.remove({name: name}, function(err, status){
     console.log(status);
       res.json({message: "Deleted a person!"});
   });

})

app.get('/:name', (req,res) => {
  console.log("this should be the name", req.params.name);
  let name = req.params.name;
  Person.find({name:name}, function(err, person){
    if(err){
      console.log("There is an error GIRLFREN here fix it!");
      re.json({message:"Error", error: err})
    } else {
      console.log(person);
      res.json({message: "Success", data: person})
    }
  });
});





// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
