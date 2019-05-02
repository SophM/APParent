var db = require("../models")

module.exports = {
    findAllForPost: function (req, res) {
        if (req.isAuthenticated()) {
            db.comments.findAll({
                where: {
                    postId: req.params.id
                }
            })
                .then(function (result) {
                    res.json(result)
                });
        }
    },
    create: function (req, res) {
        if (req.isAuthenticated()) {
            db.comment.create({
                description: req.body.description
            }).then(function (result) {
                res.json(result)
            })
        }
    }

    //can add remove comment function as a stretch goal
}