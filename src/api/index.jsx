import axios from "axios";

const api = axios.create({
  baseURL: "https://fkip-unbaja.dev-project.web.id/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;