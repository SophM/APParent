var db = require("../models")

module.exports = {
    create: function (req, res, parentId) {
        if (req.isAuthenticated()) {
            db.kids.create({
                name: req.body.name,
                gradeLevel: req.body.gradeLevel,
                //get parentId from the result of creating a parent row
                parentId: req.session.passport.user.id,
                schoolId: req.body.schoolId
            }).then(function (result) {
                res.json(result)
            })
        }
    },

    //update kids info function as a stretch goal

    // find all kids for a specific parent
    findAllKidsForAParent: function (req, res) {
        console.log("Logged Parent id ", req.session.passport.user.id); 
        db.kids.findAll({
            where: {
                parentId: req.session.passport.user.id
            }
        }).then(function (result) {
            console.log("All kids info for a parent: ", result);
            res.json(result)
        });
    },
}
