// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

var mongoose = require('mongoose');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.

var QuoteSchema = new mongoose.Schema({
 quote: {type:String, required: true, maxLength: 240},
 name: {type: String, required: true},
 createdAt: {type: Date, default: Date.now}
})
mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'

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
        res.render('index');

    })
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
// Add User Request
app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    var quote = new Quote({quote: req.body.quote, name: req.body.name});

    quote.save(function(err){
      if(err){
        console.log('something is wrong');
      } else {
        console.log('Added a quote!');
        res.redirect('/quotes');
      }
    })

})

app.get('/quotes', function(req, res) {
    Quote.find({}).sort('-createdAt').exec(function(err, quotes){
      //how to order by most recent post
      if(err){
        console.log("There is an error here fix it!");
      } else {
        console.log("This should bring me to the right quotes page")
        console.log(quotes);
        res.render('quotes', {quotes: quotes});
      }

    });
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
});
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})

mongoose.connect('mongodb://localhost/quoting_dojo');
