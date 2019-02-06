// const router = require("express").Router();

// const personsController = require("../../controllers/personsController");


// // checks "/key" for a valid api key



// router.route("/")
//   .get((req, res) => {
//     console.log("in the key route")
//     let urlParams = new URLSearchParams(req.url)

//     let authorized = urlParams.get('id')
//     if (authorized !== "1234") {
//       return res.json("not authorized")
//     }


//   })


  // router.route("/")
  // .get((req, res) => {
  //   console.log("in the key route")
  //   let urlParams = new URLSearchParams(req.url)

  //   let authorized = urlParams.get('id')
  //   if (authorized !== "1234") {
  //     return res.json("not authorized")
  //   }

  //   let ageUnder = urlParams.get('ageUnder');
  //   console.log(ageUnder)
  //   let firstName = urlParams.get('first');
  //   console.log(firstName)
  //   let lastName = urlParams.get('last');
  //   console.log(lastName)

  //   personsController.findMatching(lastName)
  //   .then(dbresults => {
  //     console.log("this is the return for finding all last name")
  //     console.log(dbresults)
  //     res.json(dbresults)
  //   })
  //   .catch(err => res.status(422).json(err))

  //   // personsController.findFirstName(firstName)
  //   //   .then(dbresults => {
  //   //     console.log("this is the return for finding first name")
  //   //     console.log(dbresults)
  //   //     res.json(dbresults)
  //   //   })
  //   //   .catch(err => res.status(422).json(err))


  // })


module.exports = router;

