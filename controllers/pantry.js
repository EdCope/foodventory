const Pantry = require("../models/pantry");
const Ingredient = require("../models/ingredient");
const User = require("../models/user");

const PantriesController = {
  Add: (req, res) => {
    Pantry.find({})
      .exec()
      .then((pantries) => {
        if (pantries.length === 0) {
          const pantry = new Pantry();
          const ingredient = new Ingredient({
            name: req.body.ingredient,
            pantry: pantry,
          });
          ingredient.save();
          pantry.ingredients.push(ingredient);
          pantry.save();
          res.json({ message: `${req.body.ingredient} successfully added` });
        } else {
          const pantry = pantries[0];
          Ingredient.findOne({ pantry: pantry._id, name: req.body.ingredient })
            .exec()
            .then((ingredient) => {
              if (ingredient === null) {
                console.log("here");
                const ingredient = new Ingredient({
                  name: req.body.ingredient,
                  pantry: pantry,
                });
                //console.log('I am here', ingredient.type.then((type) => {type}));
                ingredient.save((err) => {
                  if (err) {
                    throw err;
                  }
                });
                pantry.ingredients.push(ingredient);
                console.log(pantry.ingredients)
                pantry.save();
                res.json({
                  message: `${req.body.ingredient} successfully added`,
                });
              } else {
                console.log("here");
                res.json({
                  message: `${req.body.ingredient} already in pantry.`,
                });
              }
            });
        }
      });
  },

  Remove: (req, res) => {
    Pantry.find({})
      .exec()
      .then((pantry) => {
        console.log(req.body);
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
      console.log('The user is: ', user.pantry)
      res.json(pantries.ingredients);
    } catch (err) {
      throw err;
    }
  },
};

module.exports = PantriesController;
