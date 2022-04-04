const express = require('express');
const router = express.Router();

const PantryController = require('../controllers/pantry');

router.get('/', PantryController.Index);

module.exports = router;