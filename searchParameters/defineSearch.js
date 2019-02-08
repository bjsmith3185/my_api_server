
const personsController = require("../controllers/personsController");

module.exports = {

    processRequest: function (url) {

        let urlParams = new URLSearchParams(url)
        let lastName = urlParams.get('last_name');
        let firstName = urlParams.get('first_name');
        let age = urlParams.get('age');
        let all = urlParams.get('all');
        console.log(all)


        if (all === 'people') {
            return personsController.findAll()

        } else if (lastName && firstName && age) {
            return personsController.findFirstLastAge(firstName, lastName, age)

        } else if (lastName && firstName) {
            return personsController.findFirstLast(firstName, lastName)

        } else if (lastName && age) {
            return personsController.findLastAge(firstName, age)

        } else if (firstName && age) {
            return personsController.findFirstAge(firstName, age)

        } else if (lastName) {
            return personsController.findLast(lastName)

        } else if (firstName) {
            return personsController.findFirst(firstName)

        } else if (age) {
            return personsController.findAge(age)

        } else {
            return new Promise((resolve, reject) => {
                const noQuery = { data: "No query provided" }
                resolve(noQuery);
            })
        }

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
