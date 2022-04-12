const axios = require('axios')
const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema({
  name: String,
  pantry: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pantry' }],
  amount: Number,

})


// IngredientSchema.virtual('type').get(async function () {
//   console.log(`check: ${this.name}`)
//   let foodType = ''
//   const url = `https://api.spoonacular.com/food/ingredients/search?apiKey=a4f1e79a496b4ed6b03ce71e48375963&query=${this.name}&number=1`;
//   await axios.get(url).then((res) => {
//       const id = res.data.results[0].id
//       return newUrl = `https://api.spoonacular.com/food/ingredients/${id}/information?apiKey=a4f1e79a496b4ed6b03ce71e48375963`
//     }).then((newUrl) => {
//       axios.get(newUrl).then((res) => {
//         foodType = res.data.categoryPath[0]
//         console.log(foodType)
//       })
//     });

//   return foodType
// })

  // this url searches by name
  // fetch(`https://api.spoonacular.com//food/ingredients/search?query=${this.name}&number=1`)
  // .then(response => response.json())
  // .then(data => console.log('id search returns: ', data))
  // })
  // this url searches information by id
  // `https://api.spoonacular.com//food/ingredients/:id/information?amount=130&unit=grams`
  // return categoryPath

const Ingredient = mongoose.model("Ingredient", IngredientSchema);

module.exports = Ingredient;