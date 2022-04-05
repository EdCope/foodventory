const mongoose = require('mongoose');
const { isType } = require('validation');

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
    pantry.ingredients.push('apple')
    await pantry.save();
    expect(pantry.ingredients.length).toEqual(1)
    expect(pantry.ingredients).toEqual(['apple'])
  })
});


