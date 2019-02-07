const router = require("express").Router();
const personRoutes = require("./personsRouter");
// const checkKeyRouter = require("./keyRouter");

// route for persons api
router.use("/persons", personRoutes);

module.exports = router;
