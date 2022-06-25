<template>
  <div v-for="task in tasks" :key="task.id">
    {{ task.title }}
    <TaskDelete :id="task.id" @task-deleted="getTasks" />
  </div>
</template>

<script>
import api from "../services/ApiService";
import TaskDelete from "./TaskDelete.vue";

export default {
  name: "TasksList",
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    getTasks() {
      api
        .getTasks()
        .then((response) => {
          this.tasks = response.data.data;
        })
        .catch(console.error());
    },
  },
  mounted() {
    this.getTasks();
  },
  components: { TaskDelete },
};
</script>
