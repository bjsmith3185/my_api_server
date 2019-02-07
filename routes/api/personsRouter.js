const router = require("express").Router();
const personsController = require("../../controllers/personsController");
const createSearch = require("../../searchParameters/defineSearch");
const returnAllResults = require("../../searchParameters/returnAll");

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
    returnAllResults.allRequest(req.url)
      .then(dbresults => {
        console.log("this is the return for get all")
        console.log(dbresults)
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(dbresults)
      })
      .catch(err => res.status(422).json(err))
  });


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

