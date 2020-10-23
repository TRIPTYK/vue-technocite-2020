import { createApp } from 'vue'
import router from './router'
import store from './store/index'
import App from './App.vue'
import "./assets/styles/main.css"
const app = createApp(App)
app.use(router)
app.use(store)
//set components
app.mount('#app')
