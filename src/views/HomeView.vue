<template>
  <TaskAdd />
  <TasksList />
</template>

<script>
import TasksList from "../components/TasksList.vue";
import TaskAdd from "../components/TaskAdd.vue";

export default {
  components: { TasksList, TaskAdd },
};
</script>
