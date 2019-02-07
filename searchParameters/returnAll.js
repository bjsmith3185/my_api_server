const router = require("express").Router();
const personsController = require("../controllers/personsController");
const db = require("../models");

module.exports = {

    allRequest: function (url) {

        let urlParams = new URLSearchParams(url)

        let authorized = urlParams.get('key')
        if (authorized !== "1234") {
          return res.json("not authorized")
        }

        return personsController.findAll()

     
    
    },
  
  };