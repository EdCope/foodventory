const express = require('express');
const router = express.Router();

let jsonData = [{"id":1, "name": "Tomatoes"},{"id":2, "name":"Lettuce"},{"id":3, "name": "Cheese"},{"id":4, "name":"Hamburger"}];

router.get('/', (req,res) => {
  res.json(jsonData);
})

router.post('/add', (req,res) => {
  console.log(req);
})

module.exports = router;
