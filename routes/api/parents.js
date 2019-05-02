const router = require("express").Router();
const parentsController = require("../../controllers/parentscontroller");

// when a parent registers 
router.route("/signup")
  	.post(parentsController.create);

// displaying all the parents
router.route("/api/parents")
	.get(parentsController.findAllParents);

// displaying only one parent
router.route("/api/parents/:id")
  	.get(parentsController.findOne);



module.exports = router;