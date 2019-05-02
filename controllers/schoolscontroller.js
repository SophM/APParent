const db = require("../models")

module.export = {
    findAll : function(req, res){
        db.schools.findAll()
        .then(function(result){
            res.json(result)
        })
    }, 
    create : function(req, res){
        db.school.create({
            name: req.body.name,
            streetAddress: req.body.streetAddress,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode
        }).then(function(result){
            res.json(result)
        })
    }
}