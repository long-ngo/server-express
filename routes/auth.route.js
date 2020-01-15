const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth.controller');
const validate = require('../validate/auth.validate');

router.get('/login', controller.login);
router.post('/login', validate.postLogin, controller.postLogin);

module.exports = router;