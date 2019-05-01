var db = require("../models")

module.export = {
    create: function(req, res, parentId){
        db.kids.create({
            name: req.body.name,
            gradeLevel: req.body.gradeLevel,
            //get parentId from the result of creating a parent row
            parentId:parentId, 
            schoolId: req.body.school
        }).then(function(result){
            //This needs to be change to res.redirect(/api/parents/dashboard) once the route is define
            res.end()
        })
    }

    //update kids info function as a stretch goal
}
