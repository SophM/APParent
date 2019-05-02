// we will put parent controllers here. We can create more JS for other conditions. 
const db = require("../models")

//Using it to access the Sequelize in built operators to conditionally show data 
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//Grabs the logged in user ID 
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

    //find a specific parent 
    findOne : function(req, res){
        db.parents.findOne({where:{id: req.params.id}}).then(function(result){
            res.json(result)
        })
    }, 
    //find all parents 
    findAllParents: function(req, res){
        db.parents.findAll({
           //Excluded the logged in user only activee members 
        where: {
            //using the not operator of sequlize i.e example: userid NOT "1"
            [Op.not] : [{id: parentId}]
          },
        }).then(function(result){
            res.json(result)
        })
    }, 
    findAllMyPosts: function(req, res){
        db.parents.findOne({where:{id: req.params.id}, 
        
         //Include all posts for the parent 
         include: [{
            model: db.posts, as: "posts"
          }] ,
        }).then(function(result){
            res.json(result)
        })
    }, 
}

