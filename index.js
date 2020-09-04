const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const routes = require('./routes/user.route')

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.set('view engine','pug');
app.set('views','./views');

app.get('/', function(req,res) {
  res.render('index',{
    name:'AAA'
  });  
});

app.use('/users',routes);

app.listen(port, function() {
    console.log('server listening on port ' + port)
});