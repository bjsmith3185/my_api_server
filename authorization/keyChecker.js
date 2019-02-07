

module.exports = {

  check: function (url) {
    let urlParams = new URLSearchParams(url)
    // removes the key value from url to check if it is valid.
    let authorized = urlParams.get('key')
    if (authorized !== "1234") {
      return false
    } else {
      return true
    }
  },
};