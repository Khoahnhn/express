const express = require('express');
const app = express();

const port = 3000;

app.set('view engine','pug');
app.set('views','./views');

app.get('/', function(req,res) {
  res.render('index',{
    name:'AAA'
  });  
});

app.get('/user', function(req,res) {
    res.render('users/index',{
      users: [
        {id:1, name:'Khoa'},
        {id:2, name:'Khoa2'}
      ]
    });  
});

app.listen(port, function() {
    console.log('server listening on port ' + port)
});