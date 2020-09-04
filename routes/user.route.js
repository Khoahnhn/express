const express = require('express');
const route = express();
var controller = require('../controllers/user.controller');

route.get('/', controller.index);

route.get('/search', controller.search);

route.get('/create',controller.create);

route.get('/:id',controller.get);

route.post('/create',controller.postCreate);

module.exports = route;