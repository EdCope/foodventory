const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const AuthController = require('../controllers/auth');

const verifyLoggedIn = (req, res, next) => {
  const token = req.headers['x-access-token']
  if(!token) {
    res.send('Unauthorised route');
  } else {
    jwt.verify(token, 'secretForTesting', (err, decoded) => {
      if (err){
        res.json({auth: false, message: 'Token Invalid' })
      }else {
        req.uid = decoded.id;
        next()
      }
    })
  }
}

router.post('/', AuthController.Login);
router.get('/verify', verifyLoggedIn, AuthController.Verify);

module.exports = router;
