<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 border h-screen">
    <header class="w-full bg-teal-100 flex">
      <div>
        <img class="w-1/5" src="./assets/logo.png" />
      </div>
    </header>
    <main>
      <BaseCard>
      <template v-slot:header>
        <h3 class="text-2xl">Title of card</h3>
      </template>
      <template v-slot:default>
        <button type="button" class="btn">
          click-me
        </button>
      </template>
      </BaseCard>
      <BaseCard>
        <button type="button" class="btn">App click me</button>
        <BaseButton @click="clickMe" class="text-red-600">Test me</BaseButton>
      </BaseCard>
    </main>
  </div>
</template>

<script>
import BaseCard from "./components/UI/BaseCard";
import BaseButton from "./components/UI/BaseButton"
export default {
  components: { BaseCard , BaseButton},
  methods:{
    clickMe(){
      console.log('test')
    }
  }
};
</script>

<style></style>
