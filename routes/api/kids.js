const router = require("express").Router();
const kidsController = require("../../controllers/kidscontroller.js");

// displaying all kids for one parent
router.route("/")
	.get(kidsController.findAllKidsForAParent);

// Updating  only one kid for a parent 
router.route("/update")
	.post(kidsController.update);

// Delete the selected child  
router.route("/:id")
	.delete(kidsController.delete);

module.exports = router;