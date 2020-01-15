const db = require('../db');

module.exports.postLogin = function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var user = db.get('users').find({email: email}).value();

    var error = '';
    
    if (!user) {
        error = 'User does not exist';
    } else if (password !== user.password) {
        error = 'Wrong password';
    }

    if (error) {
        res.render('auth/login', {
            error: error,
            value: req.body
        });
        return;
    }

    next();
}