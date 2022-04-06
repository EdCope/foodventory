const mongoose = require('mongoose');
const Pantry = require('../../models/pantry');
const User = require('../../models/user');

require("../mongodb_helper");

describe("User model", () => {
  let user, pantry;
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });
  beforeEach(async () => {
    pantry = new Pantry();
    user = new User({
      email: 'test@test.com',
      password: '$2a$12$ccAirt0cv9bFCRk.SnD0Bef3n1tgzbkwz2R/V3MfYm88QjXwlZ5G6',
      pantry: pantry
    })
    await user.save();
  })

  it("user has an email", () => {
    expect(user.email).toEqual('test@test.com')
  })

  it("user has a password", () => {
    expect(user.password).toEqual('$2a$12$ccAirt0cv9bFCRk.SnD0Bef3n1tgzbkwz2R/V3MfYm88QjXwlZ5G6')
  })

  it("user has their own pantry", () => {
    expect(user.pantry).toEqual(pantry)
  })

});
