const express = require('express');
const route = express();
var controller = require('../controllers/user.controller');
const validate = require('../validate/user.validate');


route.get('/', controller.index);

route.get('/search', controller.search);

route.get('/create',controller.create);

route.get('/:id',controller.get);

route.post('/create', validate.postCreate, controller.postCreate);

module.exports = route;