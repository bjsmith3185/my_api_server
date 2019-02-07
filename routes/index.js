const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const populateRoutes = require("./setup/populateRouter")

// API Routes
router.use("/api", apiRoutes);
router.use("/populate", populateRoutes);

// If no API routes are hit, send the React app
router.use("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
const errorMSG = "error. please review README.md at https://github.com/bjsmith3185/server_using_npm "
res.json(errorMSG);
});

module.exports = router;
