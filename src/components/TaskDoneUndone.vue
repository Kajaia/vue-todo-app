<template>
  <div class="form-check">
    <input
      type="checkbox"
      class="form-check-input p-2 shadow-sm cursor-pointer"
      :checked="task.status === '1'"
      @click="doneUndoneTask(task.id)"
    />
  </div>
</template>

<script>
import toast from "../helpers/toast";
import api from "../services/ApiService";

export default {
  name: "TaskDoneUndone",
  props: ["task"],
  methods: {
    doneUndoneTask(id) {
      api
        .doneUndoneTask(id)
        .then((res) => {
          if (res.status === 200) {
            toast(
              "success",
              res.data.status ? "Task finished" : "Task marked as unfinished"
            );
            this.$emit("taskUpdated");
          }
        })
        .catch(console.error());
    },
  },
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
