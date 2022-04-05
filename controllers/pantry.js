const Pantry = require("../models/pantry");

const PantriesController = { 

  Index: (req, res) => {

    Pantry.find({}).exec().then((pantries) => {
      if (pantries.length === 0) {
        const pantry = new Pantry;

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
      console.log(pantries)
      const pantries = await Pantry.find({})
      res.json(pantries.first().ingredients)
    } catch (err){
      throw err;
    }
  }
}

module.exports = PantriesController
