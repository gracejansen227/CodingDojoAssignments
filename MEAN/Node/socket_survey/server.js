// Import express and path modules.
var express = require( "express");
var path = require( "path");

var bodyParser = require('body-parser');
var app = express();
// Define the static folder.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// Root route to render the index.ejs view.
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

  socket.on( "submit_clicked", function (info){
      console.log( 'This should be the form object', info);
      let data = info['info'];
      let name = info['info'][0].value;
      let location = info['info'][1].value;
      let language = info['info'][2].value;
      let comment = info['info'][3].value;
      let user_number = Math.random()*(99)+1;
      let user_numer = Math.floor(user_number);
      console.log(location, name);
  socket.emit( 'server_response', {'name': name, 'location':location, 'language':language, 'comment': comment, 'num': user_number});
  })
  // all the server socket code goes in here
})
