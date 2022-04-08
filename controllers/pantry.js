const Pantry = require('../models/pantry');
const Ingredient = require('../models/ingredient');

const PantriesController = {
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
        } else if (!pantries[0].ingredients.includes(req.body.ingredient)) {
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
        } else {
          res.json({ message: `${req.body.ingredient} already in pantry.` })
        }
      });
  },

  Remove: (req, res) => {
    Pantry.find({})
      .exec()
      .then((pantry) => {
        console.log(req.body)
          Ingredient.deleteOne({_id: req.body.ingredient._id}, function(err) {
            res.json({ message: `${req.body.ingredient.name} successfully removed` });
          });
          
            
          });
      },


  GetAllIngredients: async (req, res) => {
    try {
      const pantries = await Pantry.find({}).populate('ingredients');
      res.json(pantries[0].ingredients);
    } catch (err) {
      throw err;
    }
  },
};

module.exports = PantriesController;
