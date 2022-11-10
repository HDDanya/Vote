const express = require('express');

const router = express.Router();

const { renderUserInits } = require('../controllers/userInits');

router.get('/:id', renderUserInits);

module.exports = router;