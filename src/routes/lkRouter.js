const express = require('express');

const router = express.Router();

const { renderLk } = require('../controllers/lkController');

router.get('/', renderLk);

module.exports = router;
