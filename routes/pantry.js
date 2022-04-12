const express = require('express');
const router = express.Router();

const PantriesController = require('../controllers/pantry');

router.post('/add',PantriesController.Add);
router.post('/remove',PantriesController.Remove);
router.get('/all/:id', PantriesController.GetAllIngredients);

module.exports = router;