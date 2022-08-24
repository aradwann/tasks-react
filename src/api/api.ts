import axios from "axios";

const API = axios.create({
  baseURL: `http://localhost:8000`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

export default API;
