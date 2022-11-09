const express = require('express');
const router = express.Router();

const { renderEntry } = require("../controllers/entryController");

router.get('/:id', renderEntry);

module.exports = router;