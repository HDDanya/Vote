const express = require('express');

const router = express.Router();

const { renderEntry, renderVote } = require('../controllers/entryController');

router.get('/:id', renderEntry);
router.post('/:id', renderVote);

module.exports = router;
