<template>
  <button class="btn border-0 p-0" @click="deleteTask(id)">
    <i class="fas fa-times text-danger"></i>
  </button>
</template>

<script>
import toast from "../helpers/toast";
import api from "../services/ApiService";

export default {
  name: "TaskDelete",
  props: ["id"],
  methods: {
    deleteTask(id) {
      api
        .deleteTask(id)
        .then((res) => {
          if (res.status === 200) {
            toast("success", "Task deleted");
          }
        })
        .catch(console.error());
    },
  },
};
</script>
