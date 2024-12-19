const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  data: {
    bgcolor: String,
    bio: String,
    interests: [String],
  },
});

module.exports = mongoose.model("", userSchema);
