import axios from "axios";

const APIRequest = axios.create({
  baseURL: "https://real-estate-backend-production-6094.up.railway.app/api",
  withCredentials: true,
});

export default APIRequest;