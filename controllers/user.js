const User = require("../models/user");
const Pantry = require("../models/pantry");

const UsersController = { 

  Create: async (req, res) => {
    try{
      const pantry = new Pantry()
      pantry.save()
      
      const user = new User(
        {email: req.body.email, password: req.body.password, pantry: pantry}
      )
      await user.save()   
        res.json({'message': 'Account created'})
    } catch (err) {
        res.json({'message': err})
    }
  },

  AddFavourite: (req, res) => {
    //console.log(req.body)
    User.findOne({
      email: 'test@test'
    }).then((user) => {
      user.favourites.push(req.body)
      user.save()
    })
  }
    
}

module.exports = UsersController;