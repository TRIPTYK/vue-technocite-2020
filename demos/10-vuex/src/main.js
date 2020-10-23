import { createApp } from "vue";
import App from "./App.vue";
import store from './store/index'
import "./assets/styles/main.css";
const app = createApp(App);
//set components

app.use(store);
app.mount("#app");
