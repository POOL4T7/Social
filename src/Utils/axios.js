import axios from "axios";

const instance = axios.create({
  baseURL: "https://social1server.herokuapp.com/api",
});

export default instance;
