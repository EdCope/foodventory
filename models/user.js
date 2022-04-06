const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  pantry: { type: mongoose.Schema.Types.ObjectId, ref: 'Pantry' }

})

const User = mongoose.model("User", UserSchema);

module.exports = User;