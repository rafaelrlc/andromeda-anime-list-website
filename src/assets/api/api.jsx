import axios from "axios";

const BASE_URL = "https://kitsu.io/api/edge";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
