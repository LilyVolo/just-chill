const express = require("express");

const router = express.Router();


router.use("/cities", require("./cities.routes"))
router.use("/restaurants", require("./restaurants.routes"))

module.exports = router;
