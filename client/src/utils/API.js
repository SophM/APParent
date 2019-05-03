// our axios calls

import axios from "axios";

export default {
    searchAll: function() {
        return axios.get("/api/parents");
    }
};
