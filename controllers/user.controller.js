const shortid = require('shortid');

const db = require('../db');

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
    req.body.id = shortid.generate();
    req.body.avatar = req.file.path.split('\\').slice(1).join('\\');

    db.get('users').push(req.body).write();
    res.redirect('/users');
}