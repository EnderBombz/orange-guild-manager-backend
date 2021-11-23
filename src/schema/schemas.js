const mongoose = require("./../database/index");

const User = mongoose.model("user", {
  userName: String
});

module.exports = {
  User
};
