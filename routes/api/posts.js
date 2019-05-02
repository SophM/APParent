const router = require("express").Router();
const postscontroller = require("../../controllers/postscontroller.js");

// displaying all the posts
router.route("/")
	.get(postscontroller.findAllPosts);

// displaying only one post
router.route("/:id")
    .get(postscontroller.findOne);
    
// displaying only post for a parent 
router.route("/parents/:id")
    .get(postscontroller.findAllFromParent);
    
// Create a new post 
router.route("/")
	.post(postscontroller.create);

module.exports = router;