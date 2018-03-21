// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt = require('bcrypt');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/login_and_reg');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
 email: {
   type: String,
   required: true,
   unique: true,
   validate: {
     validator: function(value){
     return /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/.test( value );
 },
 message: "Please fill a valid email!",
 },
},
 first_name: {
   type: String,
   required: true,
   trim: true,
 },
 last_name: {
   type: String,
   required: true,
   trim: true,
 },
 password: {
   type: String,
   required: true,
   minLength: [3, "Password should be longer than 3 characters"],
   maxLength: [32, "Sorry homie, password can't be longer than 32 characters"],
// validate: {
//    validator: function( value ) {
//      return /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[$@$!%?&])[A-Za-z\d$@$!%?&]{8,32}/.test( value );
//    },
//    message: "Password failed validation, you must have at least 1 number, uppercase and special character"
//       },
    },
 birthday:{
   type: Date,
   require: true
 },
  createdAt: {
    type: Date,
    default: new Date,
  },
    updatedAt: {
    type: Date,
    default: new Date,
    },

});

mongoose.model('User', UserSchema);


var User = mongoose.model('User');

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({extended: true}));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

app.use(session({
  secret: 'TheHeartofTafiti',
  resave: false,
	saveUninitialized: true
}))

app.get('/', function(req,res){

  User.find({}, (err, users) => {
    if(err){
      console.log("There is an error here fix it!");
    } else {
      console.log("This should bring me right back to index page")
      res.render('index');
      //console.log(users);
    }

  })
});

app.get('/welcome', function(req,res){
  // let errors = {errors:errors};
  res.render('welcome');
});

app.post('/register', function(req, res) {
    console.log("POST DATA", req.body);
    var logged_in_user = req.body.first_name;
    console.log("email", req.body.email);

    if( req.body.password != req.body.confirm){
      let nomatch = {message:"Errors! passwords don't match"};
      console.log("Errors! passwords don't match");
      let errors =[];
      errors.push(nomatch);
      res.redirect('/', {errors: errors})
    } else {

    bcrypt.hash(req.body.password, 18).then( function(hashed_password){
        console.log(res);
        console.log(hashed_password,"passwords matched you are verified");
            var user = new User({email: req.body.email, first_name: req.body.first_name, last_name: req.body.last_name, password: hashed_password, birthday: req.body.birthday});
            console.log(user);
            session.user = user;
            user.save(function(err){
              if(err){
                console.log('something is wrong', err);
              } else {
                console.log('success fool');
                var this_user = session.user;
                //insert confirm and check matched password
                res.render('welcome', {user: this_user})
              }
            });

      }).catch(function(err){
        console.log('Error! password did not work');
      });
}
});

app.get('/logout', (req,res) =>{
  req.session.email == null;
  res.redirect('/')
})

app.post('/login', (req, res) => {
  //  console.log("this is loggin in", req.body);
    //req.session.password = req.body.password;

    req.session.email = req.body.email;
    User.findOne({email: req.body.email}, function(err,this_user){
      if(err){
        console.log("There is an error GIRLFREN here fix it!");

      } else {
        console.log("did this work",this_user);

        session.this_user = this_user;
        console.log(session.this_user);
        var hashed_password = this_user.password;
        console.log(hashed_password);

        console.log(hashed_password, "this is hashed password");
          bcrypt.compare(req.body.password, hashed_password, (err,status) =>{
            if (status ==true){
              console.log(req.body.password);
            console.log(status);
            let user = session.this_user;
            console.log("passwords matched you are verified");
            res.render('welcome', {user: user})
          } else {
            console.log(req.body.password);
            let user = session.this_user;
            console.log('Error!!');
          }
        });
      }
    });

});



// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
