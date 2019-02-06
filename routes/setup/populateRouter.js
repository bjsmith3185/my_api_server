
const router = require("express").Router();
const persons = require("../../controllers/personsController");


// Matches with "/populate/users"

const dataSeedArray = [
    {
        first: "brian",
        last: "smith",
        age: 43,

    },

    {
        first: "emmett",
        last: "smith",
        age: 2,

    },

    {
        first: "jessica",
        last: "smith",
        age: 34,

    },

    {
        first: "tom",
        last: "petty",
        age: 62,

    },

    {
        first: "police",
        last: "man",
        age: 25,

    },
]



router.route("/")
    .get((req, res) => {
        console.log("reaching server: /populate")

       
        persons.removeAll()
            .then(dbresults => {
                    console.log("removed all")
                
                    persons.createMany(dataSeedArray)
                        .then(dbresults => {
                            console.log("deleted and populated persons collection")
                            console.log(dbresults);

                        })
                        .catch(err => res.status(422).json(err))
              
                res.json("success")
            })
            .catch(err => res.status(422).json(err))
    });


module.exports = router;
