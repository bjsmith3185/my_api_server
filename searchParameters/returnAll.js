const router = require("express").Router();
const personsController = require("../controllers/personsController");
const db = require("../models");

module.exports = {

  allRequest: function (url) {
    console.log("@@@@@@@@@@@")
    // return new Promise((resolve, reject) => {
      let urlParams = new URLSearchParams(url)
      console.log(urlParams)

      let authorized = urlParams.get('key')
      if (authorized !== "1234") {
        const notValid = "not authorized"
        return notValid
        // resolve(notValid);
      }
     
  
    return personsController.findAll()


  // })
  },

};