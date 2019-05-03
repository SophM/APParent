// our axios calls

import axios from "axios";

export default {
    searchAll: function() {
        return axios.get("/api/posts");
    },
    // ===========Namita
    searchAllMembers: function() {
        return axios.get("/api/parents");
    }
    // ===========Namita
};
