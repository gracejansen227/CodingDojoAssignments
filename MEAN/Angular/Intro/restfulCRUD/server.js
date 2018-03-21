
// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

var mongoose = require('mongoose');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/taskAPI');
mongoose.Promise = global.Promise;

var TaskSchema = new mongoose.Schema({
 title: {type: String, default: 'title'},
 description: {type: String, default: ''},
 completed: {type: Boolean, default: false},
 created_at: {type: Date, default: new Date},
 updated_at: {type: Date, default: new Date},
 });


mongoose.model('Task', TaskSchema);
 // We are setting this Schema in our Models as 'User'

var Task = mongoose.model('Task');// We are retrieving this Schema from our Models, named 'User'


// Require body-parser (to receive post data from clients)
 var bodyParser = require('body-parser');
// // Integrate body-parser with our App
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: true}));
// Require path
// var path = require('path');
// Setting our Static Folder Directory
// Setting our Views Folder Directory
//app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
//app.set('view engine', 'ejs');

app.use(express.static( __dirname + '/angularAPP/dist' ));


// Routes
// Root Request
app.get('/tasks', function(req, res) {
  Task.find({}, function(err, tasks){

    if(err){
      console.log("There is an error GIRLFREN here fix it!");
      re.json({message:"Error", error: err})
    } else {

      console.log(tasks);
      res.json({message: "Success", data: tasks})
    }
  });
});

app.post('/new', (req, res) => {
    //console.log("POST DATA", req.params);

    var task = new Task({title: req.body.title, description: req.body.description});

    task.save(function(err){
      if(err){
        console.log('something is wrong');
      } else {
        console.log('Added a new task yay!', task);
        res.json({message: "Success", data: task})
      }
    });

});

app.put('/edit/:id', (req, res) => {
    console.log("update this task", req.params);
    let id = req.params.id;
    let new_title = req.body.title;
    let new_description = req.body.description
  Task.update({_id:id}, {title: new_title, description: new_description, updated_at: new Date}, function(err, status){
    if(err){
      console.log("There is an error GIRLFREN here fix it!");
      res.json({message:"Error", error: err});
    } else {
      console.log(status);
      res.json({message: "Updated shit"});
    }
  });

});



app.get('/remove/:id', (req, res) => {
    console.log("Data passed into url", req.params);
    let id = req.params.id;

    //console.log("whats this shit", req.body);
    console.log("this should be id", id);
   Task.remove({_id: req.params.id}, function(err, status){
     if(err){
       console.log("There is an error GIRLFREN here fix it!");
       res.json({message:"Error", error: err})
     } else {
       console.log(status);
       res.json({message: "Deleted shit"})
     }
   });
});

app.get('/tasks/:id', (req,res) => {
  console.log("this should be the name", req.params.id);
  let id = req.params.id;
  console
  Task.find({_id: req.params.id}, function(err, task){
    if(err){
      console.log("There is an error GIRLFREN here fix it!");
      res.json({message:"Error", error: err})
    } else {
      console.log(task);
      res.json({message: "Success", data: task})
    }
  });
});




// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
