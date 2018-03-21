
// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

// var mongoose = require('mongoose');
//
// // This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
// //   our db in mongodb -- this should match the name of the db you are going to use for your project.
// mongoose.connect('mongodb://localhost/taskAPI');
// mongoose.Promise = global.Promise;
//
// var TaskSchema = new mongoose.Schema({
//  title: {type: String, default: 'title'},
//  description: {type: String, default: ''},
//  completed: {type: Boolean, default: false},
//  created_at: {type: Date, default: new Date},
//  updated_at: {type: Date, default: new Date},
//  });
//
//
// mongoose.model('Task', TaskSchema);
//  // We are setting this Schema in our Models as 'User'
//
// var Task = mongoose.model('Task');// We are retrieving this Schema from our Models, named 'User'


// Require body-parser (to receive post data from clients)
 var bodyParser = require('body-parser');
// // Integrate body-parser with our App
 app.use(bodyParser.json());
// Require path
var path = require('path');
// Setting our Static Folder Directory
// Setting our Views Folder Directory
//app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
//app.set('view engine', 'ejs');


app.use(express.static( __dirname + '/shintoApp/dist' ));

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/index.html"))
});



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

// app.post('/new/:title', (req, res) => {
//     console.log("POST DATA", req.params);
//
//     var task = new Task({title: req.params.title});
//
//     task.save(function(err){
//       if(err){
//         console.log('something is wrong');
//       } else {
//         console.log('Added a new person!');
//         res.json({message: "Added a new person!", data: task})
//       }
//     });
//
// });
//
// app.put('/new/:id/:new_title', (req, res) => {
//     console.log("update this task", req.params);
//     let id = req.params.id;
//     let new_title = req.params.new_title;
//   Task.update({_id:id}, {title: new_title, updated_at: new Date}, function(err, status){
//     console.log(status);
//     res.json({message: "Updated a task!"});
//   });
//
// });
//
//
//
// app.get('/remove/:id', (req, res) => {
//     console.log("Data passed into url", req.params);
//     let id = req.params.id;
//    Task.remove({_id: id}, function(err, status){
//      console.log(status);
//        res.json({message: "Deleted a task!"});
//    });
//
// })
//
// app.get('/tasks/:id', (req,res) => {
//   console.log("this should be the name", req.params.id);
//   let id = req.params.id;
//   Task.find({_id:id}, function(err, task){
//     if(err){
//       console.log("There is an error GIRLFREN here fix it!");
//       re.json({message:"Error", error: err})
//     } else {
//       console.log(person);
//       res.json({message: "Success", data: task})
//     }
//   });
// });





// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
