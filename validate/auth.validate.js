const md5 = require('md5');
const db = require('../db');

module.exports.postLogin = function (req, res, next) {
    var email = req.body.email;
    var password = md5(req.body.password);//mã hóa mật khẩu
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

    res.cookie('userId', user.id, {
        signed: true
    });
    next();
}