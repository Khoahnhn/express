const express = require('express');
const router = express.Router();
const shortid = require('shortid');

const db = require('../db')

router.get('/', function(req,res) {
    res.render('users/index',{
      users : db.get('users').value()
    });  
});

router.get('/search',function(req,res) {
  var q = req.query.q;
  var matchdUsers = db.get('users').value().filter(function(user){
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render('users/index',{
    users : matchdUsers
  });
})

router.get('/create',function(req,res) {
  res.render('users/create');
});

router.get('/:id',function(req,res) {
  let id = req.params.id;
  let user = db.get('users').find({id:id}).value();
  res.render('users/view',{
    user: user
  });
});

router.post('/create',function(req,res) {
  req.body.id = shortid.generate();
  db.get('users').push(req.body).write();
  res.redirect('/users');
});

module.exports = router;