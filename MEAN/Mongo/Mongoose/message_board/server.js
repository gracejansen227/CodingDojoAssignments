// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/message_board');
mongoose.Promise = global.Promise;

var PostSchema = new mongoose.Schema({
 post: {type:String, required: true, maxLength: 240},
 name: {type: String, required: true, minLength: 4},
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

var CommentSchema = new mongoose.Schema({
  name: {type: String, required: true, minLength: 4},
  _post: { type: Schema.Types.ObjectId, ref: 'Post'},
  comment: {type: String, required: true},
}, {timestamps: true});

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema); // We are setting this Schema in our Models as 'User'

var Post = mongoose.model('Post');// We are retrieving this Schema from our Models, named 'User'
var Comment = mongoose.model('Comment');

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
  Post.find({}).populate("comments").exec(function(err, posts){
    //how to order by most recent post
    if(err){
      console.log("There is an error GIRLFREN here fix it!");
    } else {
      console.log("Back on index page witha ll messages and comments")
      console.log(posts);
      res.render('index', {posts: posts});
    }
  });
});
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
// Add User Request
app.post('/new_post', function(req, res) {
    console.log("POST DATA", req.body);
    var post = new Post({post: req.body.text, name: req.body.name});

    post.save(function(err){
      if(err){
        console.log('something is wrong');
      } else {
        console.log('Added a post!');
        res.redirect('/');
      }
    });

});


app.post('/new_comment/:id', function (req, res){
   Post.findOne({_id: req.params.id}, function(err, post){
       // data from form on the front end
       var comment = new Comment({
         name: req.body.name,
         comment: req.body.comment,
         _post: post._id
       });
       console.log(comment);
       //  set the reference like this:
       comment._post = post._id;
       // now save both to the DB
       comment.save(function(err){
         //should its be post._comments.push(comment)?
               post.comments.push(comment);
               post.save(function(err){
                    if(err) {
                         console.log('Error');
                    } else {
                         res.redirect('/');
                         console.log("was this a success?");
                    }
                });
        });
   });
});




// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
