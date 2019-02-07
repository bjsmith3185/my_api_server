const router = require("express").Router();
const personsController = require("../../controllers/personsController");
const createSearch = require("../../searchParameters/defineSearch");
const returnAllResults = require("../../searchParameters/returnAll");
const keyChecker = require("../api/keyChecker");

// Matches with "/api/persons"


router.route("/")
  .get((req, res) => {
    console.log("in the base api request")

    createSearch.processRequest(req.url)
      .then(dbresults => {
        console.log("this is the return for get specific")
        console.log(dbresults)
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(dbresults)
      })
      .catch(err => res.status(422).json(err))

  })

router.route("/all")
  .get((req, res) => {
    console.log("in the get request")

    var authorized = keyChecker.check(req.url)

    if (authorized) {
      console.log("key is authorized")
      personsController.findAll()
        .then(dbresults => {
          console.log("this is the return for get all")
          console.log(dbresults)
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.json(dbresults)
        })
        .catch(err => res.status(422).json(err))

    } else {
      console.log("key is NOT authorized")
      const notValid = "not authorized"
      res.json(notValid)
    }

    returnAllResults.allRequest(req.url)

  });


// router.route("/all")
// .get((req, res) => {
//   console.log("in the get request")
//   returnAllResults.allRequest(req.url)
//     .then(dbresults => {
//       console.log("this is the return for get all")
//       console.log(dbresults)
//       res.setHeader('Access-Control-Allow-Origin', '*');
//       res.json(dbresults)
//     })
//     .catch(err => res.status(422).json(err))
// });


// router.route("/all")
//   .get((req, res) => {
//     console.log("in the get request")
//     personsController.findAll()
//       .then(dbresults => {
//         console.log("this is the return for get all")
//         console.log(dbresults)
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.json(dbresults)
//       })
//       .catch(err => res.status(422).json(err))
//   });




module.exports = router;

