var db = require("../models")

module.export = {
    findAllForPost: function(req, res){
        db.comments.findAll({
            where:{
                postId: req.params.id
            }
        })
        .then(function(result){
            res.json(result)
        });
    },
    create: function(req, res){
        db.comment.create({
            description: req.body.description
        }).then(function(result){
            res.json(result)
        })
    }

    //can add remove comment function as a stretch goal
}