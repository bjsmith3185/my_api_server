const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const populateRoutes = require("./setup/populateRouter")
const errorMSG = "error. please review README.md at https://github.com/bjsmith3185/server_using_npm ";
const createKey = require("../nodeMailer/mailer")

// API Routes
router.use("/api", apiRoutes);

// Route to add data to api database
router.use("/populate", populateRoutes);

// Route to send api key
router.use("/key", createKey);

// If no API routes are hit, send the React app
router.use("/", function (req, res) {
    res.json("Please read the docs at: https://bjsmith3185.github.io/My_API_homepage/");
});

module.exports = router;
