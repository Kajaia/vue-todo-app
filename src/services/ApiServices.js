import axios from "axios";

const APIClient = axios.create({
  baseURL: "https://tasks.jrwebdeveloper.com/api",
  withCredentials: false,
  headers: {
    accept: "application/json",
    "Content-type": "application/json",
  },
});

export default {
  getTasks() {
    return APIClient.get(`/tasks`);
  },
};
