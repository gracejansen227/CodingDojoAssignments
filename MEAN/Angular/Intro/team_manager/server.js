
// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/authorsAPI');
mongoose.Promise = global.Promise;

var AuthorSchema = new mongoose.Schema({
 name: {type: String,
    default: 'Name',
    minlength : [3, "Must be more den thrreeeeee"],
  unique: [true, 'Author already exists with that name'],
  required: [true, 'Author name is required'],
}
 });

AuthorSchema.plugin(uniqueValidator);

mongoose.model('Author', AuthorSchema);
 // We are setting this Schema in our Models as 'User'

var Author = mongoose.model('Author');// We are retrieving this Schema from our Models, named 'User'

// Require body-parser (to receive post data from clients)
 var bodyParser = require('body-parser');
// // Integrate body-parser with our App
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: true}));
// Require path
var path = require('path');


app.use(express.static( __dirname + '/client/dist' ));

//
// app.all("*", (req,res,next) => {
//   res.sendFile(path.resolve("./public/dist/index.html"))
// });


app.get('/authors', function(req, res) {
  Author.find({}, function(err, authors){

    if(err){
      console.log("There is an error GIRLFREN here fix it!");

      res.json({message:"Error", error: err})
      return res.status(401).json(err);
    } else {

      console.log(authors);
      res.json({message: "Success", data: authors})
    }
  });
});

app.post('/new', (req, res) => {
    //console.log("POST DATA", req.params);
    var author = new Author({name: req.body.name});

    author.save(function(err){
      if(err){
        return res.status(401).json(err);
        console.log('something is wrong');
      } else {
        console.log('Added a new author yay!', author);
        res.json({message: "Success", data: author})
      }
    });

});

app.put('/update/:id', (req, res) => {
    console.log("update this task", req.params);
    let id = req.params.id;
    console.log("this should be req.body.name", req.body.name)
    let new_name = req.body.name;
  Author.update({_id:id}, {name: new_name}, function(err, status){
    if(err){
      console.log("There is an error lil lady here fix it!");
      return res.status(401).json(err);
    } else {
      console.log(status);
      res.json({message: "Updated authors shit"});
    }
  });

});


app.get('/remove/:id', (req, res) => {
    console.log("Data passed into url", req.params);
    let id = req.params.id;

    //console.log("whats this shit", req.body);
    console.log("this should be id", id);
   Author.remove({_id: req.params.id}, function(err, status){
     if(err){
       console.log("There is an error GIRLFREN here fix it!");
      return res.status(401).json(err);
     } else {
       console.log(status);
       res.json({message: "Deleted shit"})
     }
   });
});

app.get('/show/:id', (req,res) => {
  console.log("did we get to the server.js");
  //console.log("this should be the name", req.params.id);
  let id = req.params.id;

  Author.findOne({_id: req.params.id}, function(err, author){
    if(err){
      console.log("There is an error GIRLFREN here fix it!");
      return res.status(401).json(err);
    } else {
      console.log(author);
      res.json({message: "Success", author: author})
    }
  });
});


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
