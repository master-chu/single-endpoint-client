var express = require('express');

var app = express();
app.use(express.static(__dirname + '/www'));

app.listen(1234, function () {
  console.log('Web client running on port 1234');
});
