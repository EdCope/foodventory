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
});


