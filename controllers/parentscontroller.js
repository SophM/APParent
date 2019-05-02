// load the models 
const db = require("../models")

// using it to access the Sequelize in built operators to conditionally show data 
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// grabs the logged in user ID 
var parentId = req.session.passport.user.id;

module.export = {
    create: function(req, res, parentId){
        db.parents.create({
            userName: req.body.userName,
            // parentId: parentId,
            password: req.body.password,
            email: req.body.email, 
            city: req.body.city, 
            state: req.body.state
        }).then(function(result){
            res.json(result)
        })
    },

    // find a specific parent 
    findOne : function(req, res){
        db.parents.findOne({where:{id: req.params.id}}).then(function(result){
            res.json(result)
        })
    }, 

    // find all parents - sauf the parent logged in
    findAllParents: function(req, res){
        db.parents.findAll({
            where: {
                // excluded the logged-in parent
                [Op.not] : [{id: parentId}]
            },
        }).then(function(result){
            res.json(result)
        })
    }, 

    // find all posts for a specific parent
    // findAllPostsForAParent: function(req, res){
    //     db.parents.findOne({
    //         where:{
    //             id: req.params.id
    //         }, 
    //         // include all posts for the specific parent 
    //         include: [{
    //             model: db.posts, as: "posts"
    //         }],
    //     }).then(function(result){
    //         res.json(result)
    //     });
    // },
    
    // find all kids for a specific parent
    findAllKidsForAParent: function(req, res) {
        db.parents.findOne({
            where:{
                id: req.params.id
            }, 
            // include all posts for the specific parent 
            include: [{
                model: db.kids, as: "kids"
            }],
        }).then(function(result) {
            res.json(result)
        });
    }


}

