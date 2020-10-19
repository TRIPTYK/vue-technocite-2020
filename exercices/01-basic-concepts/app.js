const app = Vue.createApp({
  data() {
    return {
      name: "gilles",
      age: 46,
      avatar: "https://picsum.photos/200",
    };
  },
  methods: {
    getRandomNumber() {
      return Math.random();
    },
  },
});
app.mount("#root");
