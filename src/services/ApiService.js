import axios from "axios";

const api = axios.create({
  baseURL: "https://tasks.jrwebdeveloper.com/api",
  withCredentials: false,
  headers: {
    accept: "application/json",
    "Content-type": "application/json",
  },
});

export default {
  getTasks() {
    return api.get(`/tasks`);
  },
  addTask(title) {
    return api.post("/tasks", {
      title: title,
      status: 0,
    });
  },
  doneUndoneTask(id) {
    return api.put(`/tasks/${id}/done`);
  },
  deleteTask(id) {
    return api.delete(`/tasks/${id}`);
  },
};
