const mongoose = require('mongoose');
const Ingredient = require('../../models/ingredient');

require("../mongodb_helper");

const Pantry = require("../../models/pantry");

describe("Pantry model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.pantries.drop(() => {
      done();
    });
  });

  it("has an empty array of ingredients", () => {
    const pantry = new Pantry
    expect(pantry.ingredients.length).toEqual(0)
  })

  it('can add 1 ingredient to the pantry', async () => {
    const ingredient = new Ingredient({
      name: 'Apple'
    })
    await ingredient.save();
    const pantry = new Pantry
    pantry.ingredients.push(ingredient)
    // pantry.populate('ingredient');
    Pantry.populate(pantries, { path: 'ingredient', select: 'name' });
    // this.Ingredient.findOne({ _id: userId }).exec();
    await pantry.save();
    expect(pantry.ingredients.length).toEqual(1)
    expect(pantry.ingredients).toContain([ingredient])
  })

  it('can delete 1 ingredient from the pantry', async () => {
    const ingredient = new Ingredient({
      name: 'Banana'
    })
    await ingredient.save();
    const pantry = new Pantry
    pantry.ingredients.push(ingredient)
    Pantry.populate(pantries, { path: 'ingredient', select: 'name' });
    await pantry.save();


  })
});


