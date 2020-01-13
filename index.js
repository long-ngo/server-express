const express = require('express');
const bodyParser = require('body-parser');//database

const userRoute = require('./routes/user.route');

var app = express();
var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());//database
app.use(bodyParser.urlencoded({extended: true}));//database
app.use(express.static('public'));//database

app.get('/', function (request, response) {
  response.render('index');
});

app.use('/users', userRoute);

app.listen(port, function() {
    console.log(`server listen on port ${port}`);
});