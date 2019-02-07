const db = require("../models");

// Defining methods for the personsController
module.exports = {


  findAll: function () {
    console.log("!findAll")
    return db.Person
      .find({})

  },

  findFirstLastAge: function(first, last, age) {
    return db.Person
    .find({last: last, first: first, age: age})
  },

  findFirstLast: function(first, last) {
    return db.Person
    .find({last: last, first: first})
  },

  findLastAge: function (last, age) {
    return db.Person
    .find({last: last, age: age})
  },

  findFirstAge: function (first, age) {
    return db.Person
    .find({first: first, age: age})
  },

  findLast: function (last) {
    return db.Person
    .find({last: last})
  },

  findFirst: function (first) {
    return db.Person
    .find({first: first})
  },

  findAge: function (age) {
    return db.Person
    .find({age: age})
  },









  // findFirstName: function (name) {
  //   console.log("!findOne")
  //   return db.Person
  //     .find({first: name})

  // },

  // findMatching: function (data) {
  //   console.log("findmatching")
  //   return db.Person
  //   .find( {last: { $all: data}})
  // },

  // findByQuery: function (data) {
  //   console.log(data);
    
  //   return db.Person
  //   .find(data)
  // },

  createMany: function (data) {
    console.log("!!!!! create many")
    console.log(data)
    return db.Person
      .insertMany(data, { new: true })
  },

  removeAll: function () {
    console.log("removing all!")
    return db.Person
      .deleteMany({})
  },

};













