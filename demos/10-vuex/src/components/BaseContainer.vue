<template>
  <div class="p-4 w-1/2 pb-4 border rounded-lg shadow">
    <h1 v-if="title" class="text-2xl">{{ title }}</h1>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseContainer",
  props: {
    title: { type: String, required: false },
  },
};
</script>

<style></style>
