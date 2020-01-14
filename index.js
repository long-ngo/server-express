const express = require('express');
const bodyParser = require('body-parser');//database
const cookieParser = require('cookie-parser');

const mainRoute = require('./routes/main.route');
const userRoute = require('./routes/user.route');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());//database
app.use(bodyParser.urlencoded({extended: true}));//database
app.use(express.static('public'));//database
app.use(cookieParser());

app.use('/', mainRoute);
app.use('/users', userRoute);

app.get('/auth/login', function (req, res) {
  res.send('trang đăng nhập');
});

app.listen(port, function() {
    console.log(`server listen on port ${port}`);
});