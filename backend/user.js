const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: String,
});

module.exports = mongoose.model("", userSchema);
