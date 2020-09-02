const express = require('express');
const app = express();

const port = 3000;

var users = [
  {id:1, name:'Khoa'},
  {id:2, name:'Khoa2'},
];

app.set('view engine','pug');
app.set('views','./views');

app.get('/', function(req,res) {
  res.render('index',{
    name:'AAA'
  });  
});

app.get('/user', function(req,res) {
    res.render('users/index',{
      users : users
    });  
});

app.get('/users/search',function(req,res) {
  var q = req.query.q;
  var matchdUsers = users.filter(function(user){
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render('users/index',{
    users : matchdUsers
  });
})


app.listen(port, function() {
    console.log('server listening on port ' + port)
});