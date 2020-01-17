require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');//database
const cookieParser = require('cookie-parser');

const indexRoute = require('./routes/index.route');
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const middlewareAuth = require('./middleware/auth.middleware');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());//database
app.use(bodyParser.urlencoded({extended: true}));//database
app.use(express.static('public'));//database
app.use(cookieParser(process.env.SESSION_SECRET));

app.use('/', indexRoute);
app.use('/users', middlewareAuth.requireAuth, userRoute);
app.use('/auth', authRoute);

app.listen(port, function() {
    console.log(`server listen on port ${port}`);
});