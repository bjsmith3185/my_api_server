
const router = require("express").Router();


module.exports = {

  check: function (url) {
    console.log("key checker function")
    // return new Promise((resolve, reject) => {
      let urlParams = new URLSearchParams(url)
      console.log(urlParams)

      let authorized = urlParams.get('key')
      if (authorized !== "1234") {
        const notValid = "not authorized"
        return false
        // resolve(notValid);
      } else {
        return true
      }
     


  // })
  },

};