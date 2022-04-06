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

});
