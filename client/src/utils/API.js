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
        return axios.post("/api/posts",data);
    }, 
    // Create a comment in the modal and auto populate new entries
    createComment: function(data) {
        return axios.post("/api/comments", data);
    }
    
};