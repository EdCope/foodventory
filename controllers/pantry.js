const Pantry = require('../models/pantry');
const Ingredient = require('../models/ingredient');

const PantriesController = {
  Index: (req, res) => {
    Pantry.find({})
      .exec()
      .then((pantries) => {
        if (pantries.length === 0) {
          const pantry = new Pantry();

          pantry.save((err) => {
            if (err) {
              throw err;
            }
            res.json({ message: 'Pantry created' });
          });
        } else {
          res.json({ message: 'Pantry already created' });
        }
      });
  },

  Add: (req, res) => {
    Pantry.find({})
      .exec()
      .then((pantries) => {
        if (pantries.length === 0) {
          const pantry = new Pantry();
          const ingredient = new Ingredient({name:req.body.ingredient})
          ingredient.save()
          console.log('the req.body.ingredient is saved as: ', req.body.ingredient)
          pantry.ingredients.push(ingredient);
          pantry.save((err) => {
            if (err) {
              throw err;
            }
            res.json({ message: `${req.body.ingredient} successfully added` });
          });
        } else {
          const pantry = pantries[0];
          const ingredient = new Ingredient({name:req.body.ingredient})
          console.log(ingredient.type)
          ingredient.save((err) => {
            if (err) {
              throw err;
            }
          });
          console.log('the req.body.ingredient is saved as: ', req.body)
          pantry.ingredients.push(ingredient);
          pantry.save((err) => {
            if (err) {
              throw err;
            }
            res.json({ message: `${req.body.ingredient} successfully added` });
          });
        }
      });
  },

  GetAllIngredients: async (req, res) => {
    try {
      const pantries = await Pantry.find({});
      // console.log(pantries[0]);
      console.log('pantry.ingredients is: ', pantries[0].ingredients)
      res.json(pantries[0].ingredients);
    } catch (err) {
      throw err;
    }
  },
};

module.exports = PantriesController;
