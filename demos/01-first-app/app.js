const app = Vue.createApp({
  data() {
    return {
      name: "gilles bertrand",
      courses: [1, 2, 3],
      person: { name: "anissa" },
      tpkLink: "https://www.triptyk.eu",
      a: 5,
      nameA: "stepahne",
      nameB: "amaury",
      sectionContact: "<section>Formulaire de contact</section>",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return this.nameA;
      }
      return this.nameB;
    },
  },
});
app.mount("#app");
