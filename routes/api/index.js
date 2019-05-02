const router = require("express").Router();
const parentRoutes = require("./parents");
const postRoutes = require("./posts");
const schoolRoutes = require("./schools");


// Parent routes
router.use("/parents", parentRoutes);
// Post routes
router.use("/posts", postRoutes);
// School routes
router.use("/schools", schoolRoutes);

module.exports = router;