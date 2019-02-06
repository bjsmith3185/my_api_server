const router = require("express").Router();
const personsController = require("../controllers/personsController");
const db = require("../models");

module.exports = {

    processRequest: function (url) {

        let urlParams = new URLSearchParams(url)

        let authorized = urlParams.get('key')
        if (authorized !== "1234") {
          return res.json("not authorized")
        }

        let lastName = urlParams.get('last_name');
        let firstName = urlParams.get('first_name');
        let age = urlParams.get('age');

        if ( lastName && firstName && age ) {
            return db.Person
            .find({last: lastName, first: firstName, age: age})
        } else if ( lastName && firstName ) {
            return db.Person
            .find({last: lastName, first: firstName})
        } else if ( lastName && age ) {
            return db.Person
            .find({last: lastName, age: age})
        } else if ( firstName && age ) {
            return db.Person
            .find({first: firstName, age: age})
        } else if ( lastName ) {
            return db.Person
            .find({last: lastName})
        } else if ( firstName ) {
            return db.Person
            .find({first: firstName})
        } else if ( age ) {
            return db.Person
            .find({age: age})
        } else {
            const noQuery = "No query provided"
            return noQuery
        }
    
    },

    checkInfo: function (data) {
        console.log("this is defineSearch.js")
        console.log(data)
        console.log(data.length)
        
        // let obj = {
        //     name: "tom",
        //     last: "petty"
        // }
        // console.log(obj)
        // console.log(Object.keys(obj).length)
            //convert
  var queryObject = {};
        for(var i in data) {
           console.log(i)
           console.log(data[i])
        }

// console.log(queryObject)


//   for (var i=0; i<data.length; i++) {
//       console.log(data[i])
//       result += data[i]
//     // result[data[i].key] = data[i].value;
//   }
// console.log("!!")
//   console.log(Object.keys(queryObject).length)
  

//   var arr = [{ key:"11", value:"1100" }, { key:"22", value:"2200" }];
// var result = data.reduce(function(obj,item){
//   obj[item.key] = item.value; 
 
// }, {});
// console.log(result);


// var object = data.reduce((obj, item) => (obj[item.key] = item.value, obj) ,{});
// console.log(object)

        // return personsController.findByQuery(data)

        
    },

  
  };


//   let dataArray = [];
    
//         let ageData = {};
//         let firstData = {};
//         let lastData = {};
//         let favShowsData = {};
//         let favFoodsData = {};
    
//         let lastName = urlParams.get('last_name');
//         if (lastName) {
//           lastData = { last: lastName };
//           dataArray.push(lastData);
//         }
//         console.log(`age is ${lastName}, lastData is: ${lastData}`)
    
//         let firstName = urlParams.get('first_name');
//         if (firstName) {
//           firstData = { first: firstName };
//           dataArray.push(firstData);
//         }
//         console.log(`age is ${firstName}, firstData is: ${firstData}`)
    
//         let age = urlParams.get('age');
//         if (age) {
//           ageData = { age: age };
//           dataArray.push(ageData);
//         }
//         console.log(`age is ${age}, ageData is: ${ageData}`)
