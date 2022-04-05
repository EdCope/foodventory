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
    const pantry = new Pantry
    const ingredient = new Ingredient({
      name: 'Apple'
    })
    pantry.ingredients.push(ingredient)
    await pantry.save();
    expect(pantry.ingredients.length).toEqual(1)
    expect(pantry.ingredients).toEqual([ingredient])
  })
});


