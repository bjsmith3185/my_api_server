const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apiUsersSchema = new Schema({
  key: { type: String },
  email: { type: String },
  
  date: { type: Date, default: Date.now }
});

const ApiUsers = mongoose.model("ApiUsers", apiUsersSchema);

module.exports = ApiUsers;
