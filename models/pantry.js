const mongoose = require("mongoose");

const PantrySchema = new mongoose.Schema({
<<<<<<< HEAD
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "ingredient" }]
=======
  //ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }]
  ingredients: Array
>>>>>>> 0a39d84e62fec967ddd6a2ff15e4b44c2733d720
})

const Pantry = mongoose.model("Pantry", PantrySchema);

module.exports = Pantry