<template>
  <div class="p-2 m-2 border shadow rounded-lg bg-blue-100 ">
      <slot name="header"></slot>
      <hr />
     <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
};
</script>

<style scoped>
.btn {
  @apply px-2 border rounded bg-green-600 text-white;
}
</style>
