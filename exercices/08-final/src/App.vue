<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 border h-screen">
    <TheHeader />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader'
export default {
  components: {TheHeader},
};
</script>

<style></style>
