
const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema({
  name: String,

})
// IngredientSchema.virtual('type').get(() => {
//   // this url searches by name
//   fetch(`https://api.spoonacular.com//food/ingredients/search?query=${this.name}&number=1`)
//   .then(response => response.json())
//   .then(data => console.log('id search returns: ', data))
//   })
//   // this url searches information by id
//   // `https://api.spoonacular.com//food/ingredients/:id/information?amount=130&unit=grams`
//   // return categoryPath

const Ingredient = mongoose.model("Ingredient", IngredientSchema);

module.exports = Ingredient;