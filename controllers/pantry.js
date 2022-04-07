const Pantry = require('../models/pantry');
const Ingredient = require('../models/ingredient');

const PantriesController = {
  Add: (req, res) => {
    Pantry.find({})
      .exec()
      .then(() => {
        if (pantries.length === 0) {
          const pantry = new Pantry();
          pantry.ingredients.push(req.body.ingredient);
          pantry.save((err) => {
            if (err) {
              throw err;
            }
            res.json({ message: `${req.body.ingredient} successfully added` });
          });
        } else if (pantries[0].ingredient.not.contain(req.body.ingredient)) {
          const pantry = pantries[0];
          pantry.ingredients.push(req.body.ingredient);
          pantry.save((err) => {
            if (err) {
              throw err;
            }
            res.json({ message: `${req.body.ingredient} successfully added` });
          });
        } else {
          res.json({ message: `${req.body.ingredient} already in pantry.` })
        }
      });
  },

  Remove: (req, res) => {
    Pantry.find({})
      .exec()
      .then(() => {
          pantry.ingredients.remove(req.body.ingredient);
          pantry.save((err) => {
            if (err) {
              throw err;
            }
            res.json({ message: `${req.body.ingredient} successfully removed` });
          });
      });
  },


  GetAllIngredients: async (req, res) => {
    try {
      const pantries = await Pantry.find({});
      console.log(pantries[0]);
      res.json(pantries[0].ingredients);
      console.log(pantries[0].ingredients)
    } catch (err) {
      throw err;
    }
  },
};

module.exports = PantriesController;
