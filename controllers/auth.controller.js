module.exports.login = function (req, res) {
    res.render('auth/login');
}

module.exports.postLogin = function (req, res) {
    var errors = [];
    if (!req.body.email) {
        errors.push('The email entered is incorrect');
    }

    if (!req.body.password) {
        errors.push('The password entered is incorrect');
    }

    if (errors.length) {
        res.render('auth/login', {
            errors: errors,
            value: req.body
        });
        return;
    }
    
    res.redirect('/');
}