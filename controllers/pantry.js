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
        } else {
          const pantry = pantries[0];
          pantry.ingredients.push(req.body.ingredient);
          pantry.save((err) => {
            if (err) {
              throw err;
            }
            res.json({ message: `${req.body.ingredient} successfully added` });
          });
        }
      });
  },

  Remove: (req, res) => {
    Pantry.find({})
      .exec()
      .then(() => {
        if (pantries.length > 0 && pantry.ingredients.length > 0) {
          pantry.ingredients.remove(req.body.ingredient);
          pantry.save((err) => {
            if (err) {
              throw err;
            }
            res.json({ message: `${req.body.ingredient} successfully removed` });
          });
        } else {
          pantry.ingredients.remove(req.body.ingredient);
          pantry.save((err) => {
            if (err) {
              throw err;
            }
            res.json({ message: `${req.body.ingredient} successfully removed` });
          });
        }
      });
  },


  GetAllIngredients: async (req, res) => {
    try {
      const pantries = await Pantry.find({});
      console.log(pantries[0]);
      res.json(pantries[0].ingredients);
    } catch (err) {
      throw err;
    }
  },
};

module.exports = PantriesController;
