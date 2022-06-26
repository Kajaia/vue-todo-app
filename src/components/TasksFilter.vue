<template>
  <div class="d-flex align-items-center gap-1">
    <button
      class="btn py-1 px-3 shadow-sm text-decoration-none"
      :class="status === null ? 'btn-primary' : 'btn-link'"
      @click="filter(null)"
    >
      All
    </button>
    <button
      class="btn py-1 px-3 shadow-sm text-decoration-none"
      :class="status === 'active' ? 'btn-primary' : 'btn-link'"
      @click="filter('active')"
    >
      Active
    </button>
    <button
      class="btn py-1 px-3 shadow-sm text-decoration-none"
      :class="status === 'completed' ? 'btn-primary' : 'btn-link'"
      @click="filter('completed')"
    >
      Completed
    </button>
  </div>
</template>

<script>
export default {
  name: "TasksFilter",
  data() {
    return {
      status: null,
    };
  },
  methods: {
    filter(status) {
      this.emitter.emit("filterUpdated", status);
    },
  },
  mounted() {
    this.emitter.on("filterUpdated", (str) => {
      this.status = str;
    });
  },
};
</script>
