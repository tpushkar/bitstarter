var express = require('express');
var fs = require("fs");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = fs.readFileSync("index.html");
  response.send(buf.toString('utf-8'));
  //response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
