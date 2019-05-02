const router = require("express").Router();
const parentRoutes = require("./parents");

// Parent routes
router.use("/parents", parentRoutes);

module.exports = router;