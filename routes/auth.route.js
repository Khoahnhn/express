const express = require('express');

const route = express();
var controller = require('../controllers/auth.controller');

route.get('/login', controller.login);

route.post('/login', controller.postLogin);

module.exports = route;