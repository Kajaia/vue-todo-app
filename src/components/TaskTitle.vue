<template>
  <input
    class="form-control border-0"
    :class="status === '1' ? 'text-line-through' : ''"
    v-model="text"
    @change="taskTitleChange(id, text)"
  />
</template>

<script>
import toast from "../helpers/toast";
import api from "../services/ApiService";

export default {
  name: "TaskTitle",
  props: ["id", "title", "status"],
  data() {
    return {
      text: "",
    };
  },
  methods: {
    taskTitleChange(id, str) {
      api
        .taskTitleChange(id, str)
        .then((res) => {
          if (res.status === 200) {
            toast("success", "Updated task title");
          }
        })
        .catch(console.error());
    },
  },
  mounted() {
    this.text = this.title;
  },
};
</script>
