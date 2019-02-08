// const apiController = require("../controllers/apiUsersController")




// module.exports = {

//     validate: function (key) {
       
//         apiController.checkForApi(key)
//         .then(dbresults => {
//             console.log("this is the return for check api")
//             console.log(dbresults)
//             let approved = true;

//             for (var i = 0; i < dbresults.length; i++) {
//                 if ( key === dbresults[i].key ) {
//                     console.log("it matches another key")
//                    approved = false;
//                    return approved;
//                 }
//             }
            

//             return approved;

//         })
//         .catch(err => console.log(err))


//     },
// };