var express = require('express');
var colors = require('colors');

var app = express();
app.use(express.static(__dirname + '/www'));

app.listen(1234, function () {
  console.log(colors.green('Web client running on port 1234'));
});
