const User = require("../models/user");

const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs/dist/bcrypt");

const AuthController = { 

  Login: async (req, res) => {
    try{
      const {email, password} = req.body      
      const user = await User.findOne({ email: email})
      const passMatches = await bcrypt.compare(password, user.password)
      if(passMatches){
        const id = user._id
        const token = jwt.sign({id}, 'secretForTesting', {
          expiresIn: '1h'
        })
        res.json({auth: true, token: token, uid: id, 'message': 'Logged in'});
      }else {
        console.log("message")
        res.json({"message": 'Incorrect Password'});
      }
    } catch (err) {
      console.log('err', err)
      res.json({'message': err})
    }
  },

  Verify: async (req, res) => {
    res.json({'auth': true, message: 'Token Valid'})
  }
    
}

module.exports = AuthController;