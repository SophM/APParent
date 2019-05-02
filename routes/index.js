var path = require("path");
var router = require("express").Router();
var apiRoutes = require("./api");
var passport = require('passport');
var controller = require(".././controllers")

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

router.route("/logout").get(function (req, res) {
       
    res.clearCookie("user_sid");
    req.session.destroy(function(err) {
        req.logout();
        res.clearCookie("user_sid");
        res.status(200).redirect("/");
    });

});

// API Routes
// router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// module.exports = router;