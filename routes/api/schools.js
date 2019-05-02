const router = require("express").Router();
const schoolsController = require("../../controllers/schoolscontroller.js");

// displaying all the posts
router.route("/")
    .get(schoolsController.findAll);
    
// create a new school 
router.route("/")
	.post(schoolsController.create);

module.exports = router;