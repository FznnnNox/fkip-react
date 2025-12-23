import axios from "axios";

const api = axios.create({
  baseURL: "http://fkip-dash.test/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;