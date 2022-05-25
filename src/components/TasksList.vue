<template>
  <div v-for="task in tasks" :key="task.id">{{ task.title }}</div>
</template>

<script>
import ApiServices from "../services/ApiServices";

export default {
  name: "TasksList",
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    getTasks() {
      ApiServices.getTasks()
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
