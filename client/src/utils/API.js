// our axios calls

import axios from "axios";

export default {
    searchAll: function() {
        return axios.get("/api/posts");
    },

    searchAllMembers: function() {
        return axios.get("/api/parents");
    },
    //Create a post 
    createPost: function(data) {
        return axios.post("/api/posts",data);
    }
};