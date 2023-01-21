import axios from "axios";

const BASE_URL = "https://api.jikan.moe/v4/anime";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
