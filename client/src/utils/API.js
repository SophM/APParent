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
    // find all the schools
    getAllSchools: function() {
        return axios.get("/api/schools");
    }
    
};