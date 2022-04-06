const mongoose = require('mongoose');
const User = require('../../models/user');

require("../mongodb_helper");

describe("User model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it("user has an email", () => {
    const user = new User({
      email: 'test@test.com'
    })
    expect(user.email).toEqual('test@test.com')
  })

  it("user has a password", () => {
    const user = new User({
      email: 'test@test.com',
      password: '$2a$12$ccAirt0cv9bFCRk.SnD0Bef3n1tgzbkwz2R/V3MfYm88QjXwlZ5G6'
    })
    expect(user.password).toEqual('$2a$12$ccAirt0cv9bFCRk.SnD0Bef3n1tgzbkwz2R/V3MfYm88QjXwlZ5G6')
  })

});
