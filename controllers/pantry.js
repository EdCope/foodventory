const Pantry = require("../models/pantry");
const Ingredient = require("../models/ingredient")

const PantriesController = { 

  Index: (req, res) => {
    Pantry.find({}).exec().then((pantries) => {
      if (pantries.length === 0) {
        const pantry = new Pantry;w

        pantry.save((err) => {
          if (err) {
            throw err;
          }
          res.json({'message': 'Pantry created'})
        });
      } else {
        res.json({'message': 'Pantry already created'})
      }
    })
  },
  GetAllIngredients: async (req, res) => {
    try{
      const pantries = await Pantry.find({})
      console.log(pantries[0])
      res.json(pantries[0].ingredients)
    } catch (err){
      throw err;
    }
  }
}

module.exports = PantriesController
