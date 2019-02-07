const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const populateRoutes = require("./setup/populateRouter")
const errorMSG = "error. please review README.md at https://github.com/bjsmith3185/server_using_npm ";


// API Routes
router.use("/api", apiRoutes);

// Route to add data to api database
router.use("/populate", populateRoutes);

// If no API routes are hit, send the React app
router.use("/", function (req, res) {
    res.json(errorMSG);
});

module.exports = router;
