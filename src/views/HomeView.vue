<template>
  <div class="d-flex flex-column justify-content-center min-vh-100 bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
          <div class="card border-0 shadow">
            <div class="card-header bg-white border-light">
              <h5 class="m-0">Todos</h5>
            </div>
            <div class="card-body">
              <TaskAdd />
              <TasksList />
            </div>
            <div
              class="card-footer bg-white border-light d-flex align-items-center justify-content-between flex-wrap gap-2"
            >
              <TasksFilter />
              <TasksClear />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TasksList from "../components/TasksList.vue";
import TaskAdd from "../components/TaskAdd.vue";
import TasksFilter from "../components/TasksFilter.vue";
import TasksClear from "../components/TasksClear.vue";

export default {
  components: { TasksList, TaskAdd, TasksFilter, TasksClear },
};
</script>
