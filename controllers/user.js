const User = require("../models/user");
const Pantry = require("../models/pantry")

const UsersController = { 

  Create: async (req, res) => {
    try{
      req.body.pantry = new Pantry()
      
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