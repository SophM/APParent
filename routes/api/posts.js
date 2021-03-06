const router = require("express").Router();
const postscontroller = require("../../controllers/postscontroller.js");
const commentsController = require("../../controllers/commentscontroller");

// displaying all the posts
router.route("/")
	.get(postscontroller.findAllPosts);

// displaying only one post
router.route("/:id")
    .get(postscontroller.findOne);

// displaying all comments for one post
router.route("/:id/comments/")
    .get(commentsController.findAllForPost); 
    
// displaying only post for a parent 
router.route("/parents/:id")
    .get(postscontroller.findAllFromParent);
    
// Create a new post 
router.route("/")
    .post(postscontroller.create);

// Create a new comment on the post  -api/posts/comments
router.route("/comments")
    .post(commentsController.create);

//------------- start Sophie 
// get all the posts from the particular category
router.route("/category/:category")
    .get(postscontroller.findAllFilteredPosts);

// get all the posts in an ascending order
router.route("/all/ascending")
    .get(postscontroller.findAllPostsAscending);
//------------- end Sophie 


module.exports = router;