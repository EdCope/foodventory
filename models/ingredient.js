const https = require('https')
const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema({
  name: String,
  pantry: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pantry' }]

})


// IngredientSchema.virtual('type').get(() => {

//   const url = `https://api.spoonacular.com/food/ingredients/search?apiKey=a4f1e79a496b4ed6b03ce71e48375963&query=${this.name}&number=1`;
//   https.get(url, res => {
//     let data = '';
//     res.on('data', chunk => {
//       data += chunk;
//     });
//     res.on('end', () => {
//       data = JSON.parse(data);
//       console.log(data);
//     })
//   }).on('error', err => {
//     console.log(err.message);
//   }).end()

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