const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/user');

router.post('/', UsersController.Create);
router.post('/add', UsersController.AddFavourite);
router.get('/favourites/:id', UsersController.GetFavourites);
router.get('/findfavourite/:id/:recipeID', UsersController.FindFavourite);

module.exports = router;
