const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personsSchema = new Schema({
  first: { type: String },
  last: { type: String },
  age: {type: Number },
  date: { type: Date, default: Date.now }
});

const Persons = mongoose.model("Persons", personsSchema);

module.exports = Persons;
