const express = require('express');

const router = express.Router();

const { renderLogIn, postLogIn } = require('../controllers/logInController');

router.get('/', renderLogIn);
router.post('/', postLogIn);

module.exports = router;
