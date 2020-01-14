const db = require('../db');
const shortid = require('shortid');//tạo id ngẫu nhiên

module.exports.user = function(req, res) {
    res.render('users/index', {
      users: db.get('users').value()
    });
};

module.exports.search = function (req, res) {
    var q = req.query.q;
    var users = db.get('users').value();
    var matchUsers = users.filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', {
        users: matchUsers
    });
}

module.exports.create = function (req, res) {
    console.log(req.cookies);
    res.render('users/create');
}

module.exports.get = function (req, res) {
    var id = req.params.id
    var user = db.get('users').find({id: id}).value();
    res.render('users/infor', {
        user: user
    });
}

module.exports.postCreate = function (req, res) {
    var errors = [];
    if (!req.body.name) {
        errors.push('Name is empty');
    }
    if (!req.body.phone) {
        errors.push('Phone is empty');
    }
    if (errors.length) {
        res.render('users/create', {
            errors: errors,
            value: req.body
        });
        return;
    }
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/users');
}