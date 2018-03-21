
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  if (count = null){
    let count = 1;
  }
 res.render("index", count);
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  console.log("Client/socket is connected!");
  console.log("Client/socket id is: ", socket.id);

  socket.on("button_clicked", function (info){
      console.log( 'This should be the counter object', info);

      console.log("or does this work",info);
  socket.emit( 'server_response', info);
  })
  // all the server socket code goes in here
})
