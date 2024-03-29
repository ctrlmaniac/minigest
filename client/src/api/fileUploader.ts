import axios from "axios";

export default axios.create({
  responseType: "json",
  withCredentials: true,
  baseURL: "/api/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
