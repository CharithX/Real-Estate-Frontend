import axios from "axios";

const APIRequest = axios.create({
  baseURL: "http://localhost:8800/api",
  withCredentials: true,
});

export default APIRequest;