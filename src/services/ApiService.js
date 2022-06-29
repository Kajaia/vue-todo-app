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
  getTasks(status) {
    return api.get("/tasks", { params: { status: status } });
  },
  addTask(title) {
    return api.post("/tasks", {
      title: title,
      status: 0,
    });
  },
  taskTitleChange(id, str) {
    return api.put(`/tasks/${id}`, { title: str });
  },
  doneUndoneTask(id) {
    return api.put(`/tasks/${id}/done`);
  },
  deleteTask(id) {
    return api.delete(`/tasks/${id}`);
  },
  clearCompletedTasks() {
    return api.post("/tasks/clear");
  },
};
