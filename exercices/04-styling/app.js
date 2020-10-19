const app = Vue.createApp({
  data() {
    return {
      stylesInput: "",
    };
  },
  methods: {
    applyStyles(e) {
      this.stylesInput = e.target.value;
    },
  },
  computed: {
    dynamicClasses(value) {
      return this.stylesInput;
    },
  },
});

app.mount("#root");
