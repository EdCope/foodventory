const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.json([{"id":1, "name": "Tomatoes"},{"id":2, "name":"Lettuce"},{"id":3, "name": "Cheese"},{"id":4, "name":"Hamburger"}]);
})

module.exports = router;
