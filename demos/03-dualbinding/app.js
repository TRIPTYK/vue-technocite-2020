const app = Vue.createApp({
  data() {
    return {
      firstName: "",
      lastName: "",
      counter: 1,
    };
  },
  watch: {
    counter(value) {
      if (value > 10) alert("that's nice");
    },
  },
  computed: {
    fullName() {
      if (this.lastName === "") return "";
      return `${this.firstName} ${this.lastName}`;
    },
  },
  methods: {
    getFullName() {
      console.log("rrr");
      return `${this.firstName} ${this.lastName}`;
    },
  },
});
app.mount("#root");
