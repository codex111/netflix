import axios from "axios";

/* base url to make request of movies */
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
