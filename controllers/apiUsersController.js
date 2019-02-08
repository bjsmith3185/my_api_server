const db = require("../models");

// Defining methods for the apiUsersController
module.exports = {


  findAll: function () {
    return db.ApiUser
      .find({})
  },

  checkForApi: function(data) {
    return db.ApiUser
      .find({}, 'key')
      // .select('key')
  },

  insertNewApi: function(data) {
    return db.ApiUser
    .create(data)
  },
 

  // createMany: function (data) {
  //   return db.ApiUser
  //     .insertMany(data, { new: true })
  // },

  removeAll: function () {
    return db.ApiUser
      .deleteMany({})
  },

  removeOne: function() {
    return db.ApiUser
    .delete()
  }

};













