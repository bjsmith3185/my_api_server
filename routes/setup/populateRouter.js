
const router = require("express").Router();
const persons = require("../../controllers/personsController");
const users = require("../../controllers/apiUsersController");

const usersSeed = {
    email: "test@email.com",
    key: "123456"
}

// Matches with "/populate"

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
        first: "brian",
        last: "auston",
        age: 34,
    },
    {
        first: "jill",
        last: "marsh",
        age: 62,
    },
    {
        first: "larry",
        last: "waters",
        age: 25,
    },
    {
        first: "john",
        last: "stokes",
        age: 19,
    },
    {
        first: "jonathan",
        last: "perry",
        age: 55,
    },
    {
        first: "jack",
        last: "long",
        age: 25,
    },
    {
        first: "robert",
        last: "gormican",
        age: 32,
    },
    {
        first: "dave",
        last: "myers",
        age: 5,
    },
    {
        first: "brian",
        last: "luciano",
        age: 2,
    },
    {
        first: "nick",
        last: "young",
        age: 78,
    },
    {
        first: "joe",
        last: "armstrong",
        age: 33,
    },
    {
        first: "les",
        last: "armstrong",
        age: 56,
    },
    {
        first: "justin",
        last: "timberlake",
        age: 76,
    },
    {
        first: "steve",
        last: "smith",
        age: 21,
    },
    {
        first: "tom",
        last: "petty",
        age: 14,
    },

]


// This route will populate the persons collection with the array above.

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


    // This route will populate the apiusers collection with the info above.

router.route("/users")
.get((req, res) => {
    console.log("reaching server: /populate/users")

   
    users.removeAll()
        .then(dbresults => {
                console.log("removed all")
            
                users.insertNewApi(usersSeed)
                    .then(dbresults => {
                        console.log("deleted and populated apiUsers collection")
                        console.log(dbresults);

                    })
                    .catch(err => res.status(422).json(err))
          
            res.json("success")
        })
        .catch(err => res.status(422).json(err))
});


module.exports = router;
