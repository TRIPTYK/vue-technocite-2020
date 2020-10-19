const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    submitForm(e) {
      alert(`hi ${this.name}`);
    },
    setName(event, lastName) {
      this.name = `${event.target.value} ${lastName}`;
    },
    add(num) {
      this.counter += num;
    },
    remove(num) {
      this.counter -= num;
    },
    // add() {
    //   this.counter++;
    // },
    // remove() {
    //   this.counter--;
    // },
  },
});
app.mount("#root");
