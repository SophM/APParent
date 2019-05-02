const router = require("express").Router();
const parentsController = require("../../controllers/parentscontroller.js");

// displaying all the parents
router.route("/api/parents")
	.get(parentsController.findAllParents);

// displaying only one parent
router.route("/api/parents/:id")
	.get(parentsController.findOne);


function passportAuthenticate(localStrategy, req, res, next) {
	// console.log(localStrategy, req.body, next)
	passport.authenticate(localStrategy, function (err, user, info) {
		if (err) {
			// console.log("passport login/signup err", err)
			return next(err);
		}
		if (!user) {
			// console.log("************", err, user, info)
			if (info.from === "signup") {
				return res.render('signup', info)
			}
			else if (info.from === "login") {
				return res.render("auth", info)
			}
		} else {
			// console.log("passed ++++++++++++++++")
			req.login(user, function (err) {
				if (err) {
					console.log(err)
					return next(err);
				} else {
					console.log("\n##########################");
					console.log(req.isAuthenticated());
					console.log('sucess');
					console.log(req.session.passport.user.dataValues.id);
					console.log("##########################");
					console.log("\n")
					return res.redirect("/dashboard");
				}

			});
		}

	})(req, res, next);
};


router.route("/signup").post(function (req, res, next) {
	// console.log("Req", req.body)
	passportAuthenticate("local-signup", req, res, next);
});

router.route("/login").post(function (req, res, next) {
	// console.log("Req", req.body)
	passportAuthenticate("local-login", req, res, next);
});



module.exports = router;