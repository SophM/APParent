var db = require("../models")

module.export = {
    findAllForPost: function(req, res){
        db.comments.findAll({where:{postId: req.params.id}})
        .then(function(result){
            res.json(result)
        })
    }
}