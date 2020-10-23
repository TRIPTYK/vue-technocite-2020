<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 border h-screen">
    <header class="w-full bg-teal-100 flex">
      <div>
        <img class="w-1/5" src="./assets/logo.png" />
      </div>
    </header>
    <main>
      <BaseContainer title="vuex" v-if="isAuth">
        <Counter />
        <FinalCounter />
        <button
          @click="increment"
          class="border px-2 rounded shadow bg-indigo-200"
          type="button"
        >
          add 1
        </button>
        <button
          @click="increase({ value: 10 })"
          class="border px-2 rounded shadow bg-indigo-200"
          type="button"
        >
          add 10
        </button>
      </BaseContainer>
      <BaseContainer title="User Auth">
        <UserAuth />
      </BaseContainer>
    </main>
  </div>
</template>
<script>
import BaseContainer from "./components/BaseContainer";
import Counter from "./components/Counter";
import FinalCounter from "./components/FinalCounter";
import UserAuth from "./components/UserAuth";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    BaseContainer,
    Counter,
    FinalCounter,
    UserAuth,
  },
  computed: {
    ...mapGetters(["isAuth"]),
  },
  methods: {
    ...mapActions(["increase", "increment"]),
    // addOne() {
    //   this.$store.dispatch({
    //     type:"increment",
    //     value:null
    //   });
    // },
    // increase() {
    //   this.$store.dispatch({
    //     type: "increase",
    //     value: 10,
    //   });
    // },
  },
};
</script>

<style></style>
