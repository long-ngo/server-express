const express = require('express');
const controller = require('../controllers/main.controller');
const router = express.Router();

router.get('', controller.main);

module.exports = router;