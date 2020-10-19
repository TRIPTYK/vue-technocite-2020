const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    selectBox(box) {
      console.log(box);
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === "C") {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
  computed: {
    boxAClasses() {
      return this.boxASelected ? "bg-red-600" : "bg-blue-600";
    },
  },
});
app.mount("#root");
