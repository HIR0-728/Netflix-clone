import axios from "axios";

// TMDBからのbaseURLリクエストをs買う生
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;