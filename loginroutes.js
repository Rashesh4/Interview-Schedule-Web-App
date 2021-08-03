const path = require('path');

const express = require('express');

const controller = require('./Controller');

const router = express.Router();

router.get('/', controller.getLoginPage); 

module.exports = router;