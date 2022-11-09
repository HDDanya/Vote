const express = require('express');

const router = express.Router();

const { renderInit, addInitRender } = require('../controllers/initController');

router.get('/', renderInit);
router.post('/', addInitRender);

module.exports = router;
