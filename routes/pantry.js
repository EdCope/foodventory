const express = require('express');
const router = express.Router();

const PantriesController = require('../controllers/pantry');

router.get('/', PantriesController.Index);
router.post('/add',PantriesController.Add);
router.get('/all', PantriesController.GetAllIngredients);

module.exports = router;