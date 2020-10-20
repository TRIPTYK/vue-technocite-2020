<template>
  <div>
    <h2 class="text-3xl font-medium">Tasks List</h2>
    <ul>
      <TaskItem v-for="task in tasks" :key="task.id" :task="task"></TaskItem>
    </ul>
  </div>
</template>

<script>
import TaskItem from './TaskItem'
export default {
  name: "TasksList",
  components:{TaskItem},
  props:{
    tasks:{type:Array, required:true}
  }
};
</script>

<style></style>
