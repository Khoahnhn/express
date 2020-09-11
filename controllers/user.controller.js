const db = require('../db')
const shortid = require('shortid');

async function index(req,res) {
    res.render('users/index', {
      users : db.get('users').value()
    });  
};

async function search(req,res) {
    let q = req.query.q;
    let matchdUsers = db.get('users').value().filter(function(user){
      return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index',{
      users : matchdUsers
    });
};

async function create(req,res) {
  console.log(req.cookies);
    res.render('users/create');
};

async function get(req,res) {
    let id = req.params.id;
    let user = db.get('users').find({id:id}).value();
    res.render('users/view',{
      user: user
    });
};

async function postCreate(req,res) {
    req.body.id = shortid.generate();
3
    console.log(res.locals);

    db.get('users').push(req.body).write();
    res.redirect('/users');
};

module.exports = {
    index,
    search,
    create,
    get,
    postCreate
}