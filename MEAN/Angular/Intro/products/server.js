
// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/productsAPI');
mongoose.Promise = global.Promise;

var ProductSchema = new mongoose.Schema({
 title: {type: String,
    default: 'Title',
    minlength : [4, "Must be more den foouuurr"],
  required: [true, 'Product title is required'],
},
price: {type: Number,
 required: [true, 'Price is required'],
},
url: {type: String,
   default: 'URL',
},
 });

// ProductSchema.plugin(uniqueValidator);

mongoose.model('Product', ProductSchema);
 // We are setting this Schema in our Models as 'User'

var Product = mongoose.model('Product');// We are retrieving this Schema from our Models, named 'User'

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


app.get('/products', function(req, res) {
  Product.find({}, function(err, products){

    if(err){
      console.log("There is an error GIRLFREN here fix it!");

      res.json({message:"Error", error: err})
      return res.status(401).json(err);
    } else {

      console.log(products);
      res.json({message: "Success", data: products})
    }
  });
});

app.post('/new', (req, res) => {
    //console.log("POST DATA", req.params);
    var product = new Product({title: req.body.title, price: req.body.price, url: req.body.url});

    product.save(function(err){
      if(err){
        return res.status(401).json(err);
        console.log('something is wrong');
      } else {
        console.log('Added a new author yay!', product);
        res.json({message: "Success", data: product});
      }
    });

});

app.put('/update/:id', (req, res) => {
    console.log("update this task", req.params);
    let id = req.params.id;
    console.log("this should be req.body.title", req.body.title)
    let new_title = req.body.title;
    let new_price = req.body.price;
    let new_url = req.body.url;
  Product.update({_id:id}, {title: new_title, price: new_price, url: new_url}, {runValidators: true}, function(err, status){
    if(err){
      console.log("There is an error lil lady here fix it!");
      return res.status(401).json(err);
    } else {
      console.log(status);
      res.json({message: "Updated products shit"});
    }
  });

});


app.get('/remove/:id', (req, res) => {
    console.log("Data passed into url", req.params);
    let id = req.params.id;

    //console.log("whats this shit", req.body);
    console.log("this should be id", id);
   Product.remove({_id: req.params.id}, function(err, status){
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

  Product.findOne({_id: req.params.id}, function(err, product){
    if(err){
      console.log("There is an error GIRLFREN here fix it!");
      return res.status(401).json(err);
    } else {
      console.log(product);
      res.json({message: "Success", product: product})
    }
  });
});


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
