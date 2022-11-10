const express = require('express');

const router = express.Router();

const { renderFilter } = require('../controllers/filterController');

router.get('/', renderFilter);

module.exports = router;
