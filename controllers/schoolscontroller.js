const db = require("../models")

module.export = {
    findAll: function (req, res) {
        if (req.isAuthenticated()) {
            db.schools.findAll()
                .then(function (result) {
                    res.json(result)
                })
        }
    },
    create: function (req, res) {
        if (req.isAuthenticated()) {
            db.school.create({
                name: req.body.name,
                streetAddress: req.body.streetAddress,
                city: req.body.city,
                state: req.body.state,
                zipcode: req.body.zipcode
            }).then(function (result) {
                res.json(result)
            })
        }
    }
}