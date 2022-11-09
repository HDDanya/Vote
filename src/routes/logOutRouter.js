const express = require('express');

const router = express.Router();

const { LogOut } = require('../controllers/logInController');

router.get('/', LogOut);

module.exports = router;
