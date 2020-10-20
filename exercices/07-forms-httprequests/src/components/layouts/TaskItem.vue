<template>
  <li class="border bg-orange-100">
    {{ task.title }}
    <input type="checkbox" :checked="task.done" @change="toggleDoneTask(task.id)"/>
  </li>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  inject:["toggleDoneTask"]
};
</script>

<style></style>
