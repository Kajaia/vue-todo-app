<template>
  <div class="mb-2" v-for="task in tasks" :key="task.id">
    <div class="d-flex align-items-center justify-content-between gap-3">
      <div class="col-11 d-flex align-items-center gap-1">
        <TaskDoneUndone :task="task" />
        <TaskTitle
          class="w-100"
          :id="task.id"
          :title="task.title"
          :status="task.status"
        />
      </div>
      <TaskDelete :id="task.id" />
    </div>
  </div>
</template>

<script>
import api from "../services/ApiService";
import TaskDelete from "./TaskDelete.vue";
import TaskDoneUndone from "./TaskDoneUndone.vue";
import TaskTitle from "./TaskTitle.vue";

export default {
  name: "TasksList",
  components: { TaskDelete, TaskDoneUndone, TaskTitle },
  data() {
    return {
      tasks: [],
      status: null,
    };
  },
  methods: {
    getTasks() {
      api
        .getTasks(this.status)
        .then((response) => {
          this.tasks = response.data.data;
        })
        .catch(console.error());
    },
  },
  mounted() {
    this.getTasks();

    // Echo listeners
    window.Echo.channel("tasks")
      .listen("TaskAdded", () => {
        this.getTasks();
      })
      .listen("TaskUpdated", () => {
        this.getTasks();
      })
      .listen("TaskDone", () => {
        this.getTasks();
      })
      .listen("TaskDeleted", () => {
        this.getTasks();
      })
      .listen("TasksCleared", () => {
        this.getTasks();
      });

    // Emitt listeners
    this.emitter.on("filterUpdated", (str) => {
      this.status = str;
      this.getTasks();
    });
  },
};
</script>

<style scoped>
.text-line-through {
  text-decoration: line-through;
}
</style>
