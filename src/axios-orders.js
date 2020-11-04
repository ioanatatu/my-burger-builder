import axios from "axios";

const instance = axios.create({
    baseURL: "https://myburgerproject-a948d.firebaseio.com/",
});

export default instance;

// later, after adding authentication --> use a different URL
