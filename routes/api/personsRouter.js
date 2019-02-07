const router = require("express").Router();
const personsController = require("../../controllers/personsController");
const createSearch = require("../../searchParameters/defineSearch");
const keyChecker = require("../../authorization/keyChecker");
const notValid = "not authorized"

// Matches with "/api/persons"

// route for query search
router.route("/")
  .get((req, res) => {
    console.log("in the base api request")
    var authorized = keyChecker.check(req.url)

    if (authorized) {
      console.log("key is authorized")
      createSearch.processRequest(req.url)
      .then(dbresults => {
        // console.log("this is the return for get specific")
        // console.log(dbresults)
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(dbresults)
      })
      .catch(err => res.status(422).json(err))

    } else {
      console.log("key is NOT authorized")
      res.json(notValid)
    }

  });

  // route for returning all persons data
router.route("/all")
  .get((req, res) => {
    console.log("in the get request")

    var authorized = keyChecker.check(req.url)

    if (authorized) {
      console.log("key is authorized")
      personsController.findAll()
        .then(dbresults => {
          // console.log("this is the return for get all")
          // console.log(dbresults)
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.json(dbresults)
        })
        .catch(err => res.status(422).json(err))

    } else {
      console.log("key is NOT authorized")
      res.json(notValid)
    }

    returnAllResults.allRequest(req.url)

  });


module.exports = router;

