<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 border h-screen">
    <header class="w-full bg-teal-100 flex">
      <div>
        <img class="w-1/5" src="./assets/logo.png" />
      </div>
    </header>
    <main>
      <TasksList :tasks="tasks"></TasksList>
    </main>
  </div>
</template>

<script>
import TasksList from "./components/layouts/TasksList";
export default {
  components: { TasksList },
  data() {
    return {
      tasks: [],
    };
  },
  async created() {
    this.tasks = await (await fetch("http://localhost:3000/tasks")).json();
  },
  methods: {
    async toggleDoneTask(id) {
      const task = this.tasks.find(task=>task.id === id);
      task.done = !task.done
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      };
       await fetch(
        `http://localhost:3000/tasks/${id}`,
        requestOptions
      );
    },
  },
  provide() {
    return {
      tasks: this.tasks,
      toggleDoneTask: this.toggleDoneTask,
    };
  },
};
</script>

<style></style>
