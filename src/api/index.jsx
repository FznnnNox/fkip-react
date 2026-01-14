import axios from "axios";

const api = axios.create({
  baseURL: "https://fkip-ubj.dev-project.biz.id/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;