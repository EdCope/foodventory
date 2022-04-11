const User = require("../models/user");
const Pantry = require("../models/pantry");

const UsersController = { 

  Create: async (req, res) => {
    try{

      const pantry = new Pantry()
      pantry.save()

      const user = new User(
        
        {email: req.body.email, password: req.body.password, pantry: pantry }

      )
      await user.save()   
        res.json({'message': 'Account created'})
    } catch (err) {
        res.json({'message': err})
    }
  },

  AddFavourite: (req, res) => {
    User.findOne({
        '_id': req.body.user.uid
      }).then((user) => {
      user.favourites.push(req.body)
      user.save()
    })
  },

  GetFavourites: (req, res) => {
    User.findOne({
      '_id': req.body.user.uid
    }).then((user) => {
      res.json(user.favourites)
    })
  }
    
}

module.exports = UsersController;