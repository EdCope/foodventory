const mongoose = require("mongoose");

const PantrySchema = new mongoose.Schema({
  ingredients: Array
})

const Pantry = mongoose.model("Pantry", PantrySchema);

module.exports = Pantry