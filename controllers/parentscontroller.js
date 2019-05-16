// load the models 
const db = require("../models")

// using it to access the Sequelize in built operators to conditionally show data 
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    create: function (req, res, parentId) {
        db.parents.create({
            userName: req.body.userName,
            // parentId: parentId,
            password: req.body.password,
            email: req.body.email,
            city: req.body.city,
            state: req.body.state,
            photoLink: req.body.photoLink
        }).then(function (result) {
            res.json(result)
        })
    },

    // find a specific parent 
    findOne: function (req, res) {
        db.parents.findOne({
            where: { id: req.session.passport.user.id }
            // where:{id: req.param.id}
        }).then(function (result) {
            res.json(result)
        })
    },

    // find all parents - sauf the parent logged in
    findAllParents: function (req, res) {
        db.parents.findAll({
            where: {
                // excluded the logged-in parent
                [Op.not]: [{ id: req.session.passport.user.id }]
            }
        }).then(function (result) {
            res.json(result)
        })
            .catch(err => res.status(422).json(err));
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
    findAllKidsForAParent: function (req, res) {
        db.parents.findOne({
            where: {
                id: req.params.id
            },
            // include all posts for the specific parent 
            include: [{
                model: db.kids, as: "kids"
            }],
        }).then(function (result) {
            res.json(result)
        });
    },

    //Updating deatils for the logged in user 
    update: function (req, res) {
        db.parents.update(
            //Fields to update 
            {
                userName: req.body.userName,
                //Re-generate Hashed Password for the user 
                // passw: db.users.generateHash(req.body.password) , 
                city: req.body.city,
                state: req.body.state
                //   photoLink : req.body.photoLink
            }, {
                where: {
                    id: req.session.passport.user.id
                }
            }).then(function (dbParent) {

                console.log("Parent Information Updated", dbParent);
                console.log("1");
                res.json(dbParent);
            })
    },
    checkStatus: function (req, res) {
        if (req.isAuthenticated()) {
            res.json({ loggedIn: true })
        }
        res.json({ loggedIn: false })

    }
}

