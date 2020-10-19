const app = Vue.createApp({
  data() {
    return {
      value: 0,
      randomValue: Math.round(Math.random() * 20),
    };
  },
  watch: {
    result(value) {
      setTimeout(() => {
        this.value = 0;
      }, 5000);
    },
  },
  computed: {
    result(value) {
      console.log(this.randomValue);
      if (this.value < this.randomValue) {
        return "pas encore là";
      } else if (this.value === this.randomValue) {
        return "Super on y est";
      }
      return "trop haut";
    },
  },
  methods: {
    add(num) {
      this.value += num;
    },
  },
});
app.mount("#root");
