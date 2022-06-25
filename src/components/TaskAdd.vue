<template>
  <input
    type="text"
    placeholder="Add task..."
    v-model="title"
    @keydown.enter="addTask"
    autofocus
  />
</template>

<script>
import toast from "../helpers/toast";
import api from "../services/ApiService";

export default {
  name: "TaskAdd",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTask() {
      api
        .addTask(this.title)
        .then((res) => {
          if (res.status === 201) {
            this.title = "";
            toast("success", "Task added");
            this.emitter.emit("taskAdded");
          }
        })
        .catch(console.error());
    },
  },
};
</script>
