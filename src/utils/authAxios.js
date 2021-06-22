import axios from "axios";
const accessToken = localStorage.getItem("token");

const authAxios = axios.create({
  baseURL: "http://localhost:2000/api",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
export default authAxios;
