const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/user');

router.post('/', UsersController.Create);
router.post('/add', UsersController.AddFavourite);
router.get('/favourites/:id', UsersController.GetFavourites);

module.exports = router;
