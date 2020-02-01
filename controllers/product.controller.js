const db = require('../db');

module.exports.index = function (req, res) {
    const perPage = 8;
    var page = req.query.page || 1;
    var begin = (page - 1) * perPage;
    var end = page * perPage;
    res.render('products/index', {
        products: db.get('products').value().slice(begin, end)
    });
}