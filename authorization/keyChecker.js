const apiUsersController = require("../controllers/apiUsersController");

module.exports = {

  check: function (url) {

    return new Promise((resolve, reject) => {
      let authorized = "invalid";

      let urlParams = new URLSearchParams(url)
      // removes the key value from url to check if it is valid.
      let enteredKey = urlParams.get('key')

      apiUsersController.checkForApi()
        .then(result => {
          // console.log("inside apikey checker return from db")
          // console.log(result)
          for (var i = 0; i < result.length; i++) {
            if (enteredKey === result[i].key) {
              // console.log("the api key matched")
              authorized = "valid";
            }
          }
          resolve(authorized);

        })
        .catch(err => console.log(err))
    })

  },
};