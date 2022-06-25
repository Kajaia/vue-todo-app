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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TasksList from "../components/TasksList.vue";
import TaskAdd from "../components/TaskAdd.vue";

export default {
  components: { TasksList, TaskAdd },
};
</script>
