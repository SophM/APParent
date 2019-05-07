// our axios calls

import axios from "axios";

export default {
    searchAll: function() {
        return axios.get("/api/posts");
    },

    searchAllMembers: function() {
        return axios.get("/api/parents");
    },
    //See Logged in user data 
    findOne: function() {
        return axios.get("/api/parents/:id");
    },
    //Create a post 
    createPost: function(data) {
        return axios.post("/api/posts", data);
    }, 
    // Create a comment in the modal and auto populate new entries
    createComment: function(data) {
        return axios.post("/api/posts/comments", data);
    },

    // get all comments for a post
    findAllForPost: function(data) {
        return axios.get("/api/posts/" + data.id + "/comments/");
    },

    // find all the schools
    getAllSchools: function() {
        return axios.get("/api/schools");
    },

    //update logged in profile 
    updateProfile: function(data) {
        return axios.post("/api/parents/update", data);
    }, 

    logout: function(){
        return axios.get("/logout")
    }
};