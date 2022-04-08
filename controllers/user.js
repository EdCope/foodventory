const User = require("../models/user");
const Pantry = require("../models/pantry");

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
  },

  AddFavourite: (req, res) => {
    User.findOne({
      email: 'test@test'
    }).then((user) => {
      console.log('this is the user', user),
      user.favourites.push(req.body)
      console.log('this is the req.body', req)
      user.save()
    })
  }
    
}

module.exports = UsersController;