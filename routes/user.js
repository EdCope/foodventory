const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/user');

router.post('/', UsersController.Create);
router.post('/add', UsersController.AddFavourite);

module.exports = router;
