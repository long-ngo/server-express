module.exports.postCreate = function (req, res, next) {
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
    next();
};