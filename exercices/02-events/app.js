const app = Vue.createApp({
  data() {
    return {
      output1: "",
      output2: "",
    };
  },
  methods: {
    alertMe(e, output) {
      alert(this[output]);
    },
    setOutput(e, output) {
      this[output] = e.target.value;
    },
  },
});

app.mount("#root");
