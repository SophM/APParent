const db = require("../models")

module.export = {
    //create a post
    create : function(req, res){
        db.posts.create({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            //double check to see if req.session.passport.user.id is what we need
            parentId: req.session.passport.user.id, 
        }).then(function(result){
            
            res.json(result)
        })
    },
    //find a specific post 
    findOne : function(req, res){
        db.posts.findOne({where:{id: req.params.id}}).then(function(result){
            res.json(result)
        })
    }, 
    //find all post from a parent
    findAllFromParent : function(req, res){
        db.posts.findAll({where: {parentId: req.params.parentId}}).then(function(result){
            res.json(result)
        })
    }, 
    //find all post ever made
    findAllPosts: function(req, res){
        db.posts.findAll().then(function(result){
            res.json(result)
        })
    }
}