// const validator = require("./validateNewKey");
const apiController = require("../controllers/apiUsersController")


module.exports = {

    makeKey: function () {
        return new Promise((resolve, reject) => {
            // console.log("in keyCreator.js")
            var a = Math.floor(Math.random() * 10)
            var b = Math.floor(Math.random() * 10)
            var c = Math.floor(Math.random() * 10)
            var d = Math.floor(Math.random() * 10)
            var e = Math.floor(Math.random() * 10)
            var f = Math.floor(Math.random() * 10)

            var newKey = "" + a + b + c + d + e + f;
            // console.log(newKey)
     

            apiController.checkForApi(newKey)
                .then(dbresults => {
                    // console.log("this is the return for check api")
                    // console.log(dbresults)

                    for (var i = 0; i < dbresults.length; i++) {
                        if (newKey === dbresults[i].key) {
                            console.log("it matches another key")
                            this.makeKey();
                            break;
                        }
                    }
                    resolve(newKey);

                })
                .catch(err => console.log(err))

            })
        },
};