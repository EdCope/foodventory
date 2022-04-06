const User = require("../models/user");

const UsersController = { 

  Create: async (req, res) => {
    try{
      const user = new User(
        req.body
      )
      await user.save()   
      res.json({'message': 'Account created'})
    } catch (err) {
      res.json({'message': err})
    }
  }
    
}

module.exports = UsersController;