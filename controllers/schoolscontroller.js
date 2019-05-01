const db = require("../models")

module.export = {
    findAll : function(req, res){
        db.schools.findAll()
        .then(function(result){
            res.json(result)
        })
    }
}