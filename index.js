const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.set('view engine','pug');
app.set('views','./views');

var users = [
  {id:1, name:'Khoa'},
  {id:2, name:'Khoa2'},
  {id:3, name:'Khoa3'}
];

app.get('/', function(req,res) {
  res.render('index',{
    name:'AAA'
  });  
});

app.get('/users', function(req,res) {
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

app.get('/users/create',function(req,res) {
  res.render('users/create');
})

app.post('/users/create',function(req,res) {
  users.push(req.body);
  res.redirect('/users');
});

app.listen(port, function() {
    console.log('server listening on port ' + port)
});