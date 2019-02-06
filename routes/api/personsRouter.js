const router = require("express").Router();
const cors = require('cors');
const personsController = require("../../controllers/personsController");
const createSearch = require("../../searchParameters/defineSearch")
// Matches with "/api/persons"

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 
}


router.route("/")
  .get((req, res) => {
    console.log("in the base api request")

   createSearch.processRequest(req.url)
   .then(dbresults => {
    console.log("this is the return for get specific")
    console.log(dbresults)
    res.setHeader('Access-Control-Allow-Origin','*');
    res.json(dbresults)
  })
  .catch(err => res.status(422).json(err))
//=======================================================


    // let urlParams = new URLSearchParams(req.url)

    // let authorized = urlParams.get('key')
    // if (authorized !== "1234") {
    //   return res.json("not authorized")
    // }
    // let dataArray = [];

    // let ageData = {};
    // let firstData = {};
    // let lastData = {};
    // let favShowsData = {};
    // let favFoodsData = {};

    // let lastName = urlParams.get('last_name');
    // if (lastName) {
    //   lastData = { last: lastName };
    //   dataArray.push(lastData);
    // }
    // console.log(`age is ${lastName}, lastData is: ${lastData}`)

    // let firstName = urlParams.get('first_name');
    // if (firstName) {
    //   firstData = { first: firstName };
    //   dataArray.push(firstData);
    // }
    // console.log(`age is ${firstName}, firstData is: ${firstData}`)

    // let age = urlParams.get('age');
    // if (age) {
    //   ageData = { age: age };
    //   dataArray.push(ageData);
    // }
    // console.log(`age is ${age}, ageData is: ${ageData}`)

  
    

    // createSearch.checkInfo(dataArray)
    //   // .then(dbresults => {
    //   //   console.log("this is the return for createSearch")
    //   //   console.log(dbresults)
    //   //   res.json(dbresults)
    //  res.json("finished")
    //   // })
    //   // .catch(err => res.status(422).json(err))

//====================================================================

    // let favShows = urlParams.get('fav_shows');
    // console.log(favShows)
    // let favFoods = urlParams.get('fav_foods')
    // console.log(favFoods)
    // let multipleResults = urlParams.get('multi')
    // console.log(multipleResults)






    // personsController.findMatching(lastName)
    // .then(dbresults => {
    //   console.log("this is the return for finding all last name")
    //   console.log(dbresults)
    //   res.json(dbresults)
    // })
    // .catch(err => res.status(422).json(err))

    // personsController.findFirstName(firstName)
    //   .then(dbresults => {
    //     console.log("this is the return for finding first name")
    //     console.log(dbresults)
    //     res.json(dbresults)
    //   })
    //   .catch(err => res.status(422).json(err))


  })




router.route("/all")
  .get((req, res) => {
    console.log("in the get request")
    personsController.findAll()
      .then(dbresults => {
        console.log("this is the return for get all")
        console.log(dbresults)
        res.json(dbresults)
      })
      .catch(err => res.status(422).json(err))
  });




module.exports = router;

