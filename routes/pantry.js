const express = require('express');
const router = express.Router();

const PantriesController = require('../controllers/pantry');

router.get('/', PantriesController.Index);

module.exports = router;