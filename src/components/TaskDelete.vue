<template>
  <button
    class="btn btn-sm btn-danger shadow-sm rounded-pill"
    @click="deleteTask(id)"
  >
    X
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
            this.$emit("taskDeleted");
          }
        })
        .catch(console.error());
    },
  },
};
</script>
