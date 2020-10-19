const app = Vue.createApp({
  data() {
    return {
      ifTitleVisible: false,
      items: [{ name: "gilles" }, { name: "anissa" }, { name: "geoffrey" }],
    };
  },
  methods: {
    toggleTitle() {
      this.ifTitleVisible = !this.ifTitleVisible;
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    },
  },
});
app.mount("#root");
