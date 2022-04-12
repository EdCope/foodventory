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
    console.log(req.body.favourite)
    User.findOne({
        '_id': req.body.user.uid
      }).then((user) => {
        if (!user.favourites.includes(req.body.favourite)) { 
          user.favourites.push(req.body.favourite)
          user.save()
        } else {
          user.favourites.pull(req.body.favourite)
          user.save()
        }
    })
  },

  GetFavourites: (req, res) => {
    User.findOne({
      '_id': req.params.id
    }).then((user) => {
      res.json(user.favourites)
    })
  },

  FindFavourite: (req, res) => {
    User.findOne({
      '_id': req.params.id
    }).then((user) => {
      if (user.favourites.includes(req.params.recipeID)) {
        res.json("true")
      } else {
        res.json("false")
      }
    })
  }
}

module.exports = UsersController;