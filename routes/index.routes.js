const { isAuthenticated } = require("../middleware/jwt.middleware"); 
const express = require("express");
 
console.log('============LOADED0000000000000')
const router = express.Router();

const authRoutes = require("./auth.routes");
router.use("/auth", authRoutes);
console.log('============LOADED4444444444444')
router.use("/cities", require("./cities.routes"))
router.use("/plans",isAuthenticated, require("./plans.routes"))
module.exports = router;
