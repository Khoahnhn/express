const express = require('express');
const app = express();

const port = 3000;

app.get('/', function(req,res) {
  res.send('<h1>Hello world</h1>');  
});

app.get('/user', function(req,res) {
    res.send('User lists');  
  });

app.listen(port, function() {
    console.log('server listening on port ' + port)
});