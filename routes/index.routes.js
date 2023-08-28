const express = require("express");


const router = express.Router();

const authRoutes = require("./auth.routes");
router.use("/auth", authRoutes);

router.use("/cities", require("./cities.routes"))
router.use("/restaurants", require("./restaurants.routes"))

module.exports = router;
