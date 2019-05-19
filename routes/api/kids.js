const router = require("express").Router();
const kidsController = require("../../controllers/kidscontroller.js");

// displaying all kids for one parent
router.route("/")
	.get(kidsController.findAllKidsForAParent);

module.exports = router;