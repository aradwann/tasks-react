import axios from "axios";

const API = axios.create({
  baseURL: `http://localhost:8000`,
});

// axios.interceptors.request.use(function (config: any) {
//   const token = localStorage.getItem("jwt");
//   config.headers.Authorization = token;

//   return config;
// });

export default API;
