const app = Vue.createApp({
  data() {
    return {
      enteredTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: new Date().toISOString(),
        title: this.enteredTodo,
        done: false,
      });
      this.enteredTodo = "";
    },
    removeTodo(id) {
      this.todos.splice(
        this.todos.findIndex((item) => item.id === id),
        1
      );
    },
    toggleTodo(id) {
      this.todos[this.todos.findIndex((item) => item.id === id)].done = !this
        .todos[this.todos.findIndex((item) => item.id === id)].done;
    },
  },
  computed: {
    todosDone() {
      return this.todos.filter((item) => item.done === true).length;
    },
  },
});
app.mount("#root");
