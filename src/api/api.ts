import axios from "axios";

const API = axios.create({
  baseURL: `http://localhost:8000`,
});

API.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "jwt"
)}`;
// axios.interceptors.request.use(function (config: any) {
//   const token = localStorage.getItem("jwt");
//   config.headers.Authorization = token;

//   return config;
// });

export default API;
