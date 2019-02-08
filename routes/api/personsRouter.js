const router = require("express").Router();
const createSearch = require("../../searchParameters/defineSearch");
const keyChecker = require("../../authorization/keyChecker");
const notValid = "not authorized"

// Matches with "/api/persons"

// route for query search
router.route("/")
  .get((req, res) => {
    console.log("in the base api request")

    keyChecker.check(req.url)
      .then(dataBack => {
        // console.log("this is the return from keyChecker.s")
        // console.log(dataBack)

        if (dataBack === "valid") {
          console.log("key is authorized")
          createSearch.processRequest(req.url)
            .then(dbresults => {

              res.setHeader('Access-Control-Allow-Origin', '*');
              res.json(dbresults)
            })
            .catch(err => res.status(422).json(err))

        } else {
          console.log("key is NOT authorized")
          res.json(notValid)
        }

      })
      .catch(err => console.log(err))
  });

// route for returning all persons data
// router.route("/all")
//   .get((req, res) => {
//     console.log("in the get request")

//     keyChecker.check(req.url)
//       .then(dataBack => {
//         // console.log("this is the return from keyChecker.s")
//         // console.log(dataBack)

//         if (dataBack === "valid") {
//           console.log("key is authorized")
//           personsController.findAll()
//             .then(dbresults => {
//               // console.log("this is the return for get all")
//               // console.log(dbresults)
//               res.setHeader('Access-Control-Allow-Origin', '*');
//               res.json(dbresults)
//             })
//             .catch(err => res.status(422).json(err))

//         } else {
//           console.log("key is NOT authorized")
//           res.json(notValid)
//         }

//       })
//       .catch(err => console.log(err))

//   });


module.exports = router;

