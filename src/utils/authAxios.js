import axios from "axios";

const authAxios = axios.create({
  baseURL: "http://localhost:2000/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
export default authAxios;
