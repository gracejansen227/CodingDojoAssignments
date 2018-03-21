// Import express and path modules.
var express = require( "express");
var path = require( "path");

var bodyParser = require('body-parser');
var app = express();
let session = require('express-session');
// Define the static folder.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// Root route to render the index.ejs view.

app.use(session({
    secret: 'SecretMessage',
    resave: false,
    saveUninitialized: true,
}))
// app.get('/', function(req, res) {
//  res.render("login");
// })
 app.get('/', function(req, res) {
  res.render("index");
 })

// Start Node server listening on port 8000.
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);


io.sockets.on('connection', function (socket) {
  console.log("Client/socket is connected!");
  console.log("Client/socket id is: ", socket.id);

  socket.on("message_posted", function (data){


       console.log(data);

      // console.log(location, name);
  io.emit('server_response', data);
  })
  // all the server socket code goes in here
})
