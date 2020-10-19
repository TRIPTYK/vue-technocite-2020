<template>
  <h1>Friends list</h1>
  <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <AmiContact v-for="ami in amis" :key="ami.id" :ami="ami"></AmiContact>
  </ul>
</template>

<script>
import AmiContact from "./components/AmiContact";
export default {
  name: "App",
  components: {
    AmiContact,
  },
  data() {
    return {
      amis: [
        {
          id: 1,
          name: "Gilles Bertrand",
          phone: "00235202652",
          email: "gilles@triptyk.eu",
        },
        {
          id: 2,
          name: "Anissa Belkheir",
          phone: "00235202652",
          email: "anissa@triptyk.eu",
        },
        {
          id: 3,
          name: "Geoffrey Denys",
          phone: "00235202652",
          email: "geoffrey@triptyk.eu",
        },
      ],
    };
  },
};
</script>

<style></style>
