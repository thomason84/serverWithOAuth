const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

//create or update collection of users
mongoose.model("users", userSchema);
