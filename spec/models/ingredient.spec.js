const mongoose = require('mongoose');

require("../mongodb_helper");

const Ingredient = require("../../models/ingredient");


describe("Ingredient model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.ingredients.drop(() => {
      done();
    });
  });

  it("should have a name", async () => {
    const ingredient = new Ingredient
    ({
      name: 'Apple'
    })
    await ingredient.save()
    expect(ingredient.name).toEqual ('Apple')
  })

})

