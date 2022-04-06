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

  GetAllIngredients: async (req, res) => {
<<<<<<< HEAD
    try{
      const pantries = await Pantry.find({})
      .populate('ingredient')
      console.log(pantries)
      res.json(pantries[0].ingredients)
    } catch (err){
=======
    try {
      const pantries = await Pantry.find({});
      console.log(pantries[0]);
      res.json(pantries[0].ingredients);
    } catch (err) {
>>>>>>> 0a39d84e62fec967ddd6a2ff15e4b44c2733d720
      throw err;
    }
  },
};

module.exports = PantriesController;
