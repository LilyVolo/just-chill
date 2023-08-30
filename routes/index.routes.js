const { isAuthenticated } = require("../middleware/jwt.middleware"); 
const express = require("express");
 

const router = express.Router();

const authRoutes = require("./auth.routes");
router.use("/auth", authRoutes);

router.use("/cities", require("./cities.routes"))
router.use("/plans",isAuthenticated, require("./plans.routes"))
module.exports = router;
