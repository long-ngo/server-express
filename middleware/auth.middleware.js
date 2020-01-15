const db = require('../db');

module.exports.requireAuth = function (req, res, next) {
    if (!req.cookies.userId || !db.get('users').find({id: req.cookies.userId}).value()) {
        res.redirect('/auth/login');
        return;
    }

    next();
};