<template>
  <div
    class="d-flex align-items-center justify-content-between gap-3 mb-2"
    v-for="task in tasks"
    :key="task.id"
  >
    <div class="d-flex align-items-center gap-1">
      <TaskDoneUndone :task="task" @task-updated="getTasks" />
      <span :class="task.status === '1' ? 'text-line-through' : ''">{{
        task.title
      }}</span>
    </div>
    <TaskDelete :id="task.id" @task-deleted="getTasks" />
  </div>
</template>

<script>
import api from "../services/ApiService";
import TaskDelete from "./TaskDelete.vue";
import TaskDoneUndone from "./TaskDoneUndone.vue";

export default {
  name: "TasksList",
  components: { TaskDelete, TaskDoneUndone },
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

    // Listeners
    this.emitter.on("taskAdded", () => {
      this.getTasks();
    });
    this.emitter.on("filterUpdated", (str) => {
      this.status = str;
      this.getTasks();
    });
    this.emitter.on("clearedCompletedTasks", () => {
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
