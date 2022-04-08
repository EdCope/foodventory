const Pantry = require("../models/pantry");
const Ingredient = require("../models/ingredient");
const User = require("../models/user");

const PantriesController = {
  Add: async (req, res) => {
    const user = await User.findOne({'_id': req.body.user.uid})
    
    Pantry.findOne({'_id': user.pantry})
      .exec()
      .then((pantry) => {
        Ingredient.findOne({ pantry: pantry._id, name: req.body.ingredient })
          .exec()
          .then((ingredient) => {
            if (ingredient === null) {
              const ingredient = new Ingredient({
                name: req.body.ingredient,
                pantry: pantry,
              });
              ingredient.save((err) => {
                if (err) {
                  throw err;
                }
              });
              pantry.ingredients.push(ingredient);
              pantry.save();
              res.json({
                message: `${req.body.ingredient} successfully added`,
              });
            } else {
              res.json({
                message: `${req.body.ingredient} already in pantry.`,
              });
            }
          });
      });
  },

  Remove: async (req, res) => {
    const user = await User.findOne({'_id': req.body.user.uid})
    Pantry.findOne({'_id': user.pantry})
      .exec()
      .then((pantry) => {
        Ingredient.deleteOne({ _id: req.body.ingredient._id }, function (err) {
          res.json({
            message: `${req.body.ingredient.name} successfully removed`,
          });
        });
      });
  },

  GetAllIngredients: async (req, res) => {
    try {
      const user = await User.findOne({'_id': req.params.id}).populate('pantry')
      const pantries = await Pantry.findOne({'_id': user.pantry}).populate("ingredients");
      res.json(pantries.ingredients);
    } catch (err) {
      throw err;
    }
  },
};

module.exports = PantriesController;
