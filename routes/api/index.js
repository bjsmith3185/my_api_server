const router = require("express").Router();
const personRoutes = require("./personsRouter");
// const checkKeyRouter = require("./keyRouter");

// checkPassword routes
router.use("/persons", personRoutes);
// router.use("/key", checkKeyRouter)
module.exports = router;
