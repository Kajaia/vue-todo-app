<template>
  <button class="btn btn-danger shadow-sm py-1 px-3" @click="clearTasks">
    Clear completed
  </button>
</template>

<script>
import toast from "../helpers/toast";
import api from "../services/ApiService";

export default {
  name: "TasksClear",
  methods: {
    clearTasks() {
      api
        .clearCompletedTasks()
        .then((res) => {
          if (res.status === 200) {
            toast("success", "Cleared completed tasks");
          }
        })
        .catch(console.error());
    },
  },
};
</script>
