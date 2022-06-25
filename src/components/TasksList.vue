<template>
  <div v-for="task in tasks" :key="task.id">
    <TaskDoneUndone :task="task" @task-updated="getTasks" />
    <span :class="task.status === '1' ? 'text-line-through' : ''">{{
      task.title
    }}</span>
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
};
</script>

<style scoped>
.text-line-through {
  text-decoration: line-through;
}
</style>
