const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const low = require('lowdb');
const shortid = require('shortid');
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

const port = 3000;

db.defaults({ users: [] })
  .write()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.set('view engine','pug');
app.set('views','./views');

app.get('/', function(req,res) {
  res.render('index',{
    name:'AAA'
  });  
});

app.get('/users', function(req,res) {
    res.render('users/index',{
      users : db.get('users').value()
    });  
});

app.get('/users/search',function(req,res) {
  var q = req.query.q;
  var matchdUsers = db.get('users').value().filter(function(user){
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render('users/index',{
    users : matchdUsers
  });
})

app.get('/users/create',function(req,res) {
  res.render('users/create');
});

app.get('/users/:id',function(req,res) {
  let id = req.params.id;
  let user = db.get('users').find({id:id}).value();
  res.render('users/view',{
    user: user
  });
});

app.post('/users/create',function(req,res) {
  req.body.id = shortid.generate();
  db.get('users').push(req.body).write();
  res.redirect('/users');
});

app.listen(port, function() {
    console.log('server listening on port ' + port)
});