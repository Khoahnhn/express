const db = require('../db')
const md5 = require('md5');

async function login(req,res) {
    res.render('auth/login');  
};

async function postLogin(req,res) {
    var email = req.body.email;
    var password = req.body.password;
    var user = db.get('users').find({email:email}).value();
    if(!user){
        res.render('auth/login',{
            errors :[ 
                'User does not exist.'
            ],
            values : req.body
        });
        return;
    }

    let hashedPassword = md5(password)

    if(user.password !== hashedPassword){
        res.render('auth/login',{
            errors :[ 
                'Wrong password.'
            ],
            values : req.body
        });
        return;
    }

    res.cookie('userId', user.id);
    res.redirect('/users');
};

module.exports = {
    login,
    postLogin
}