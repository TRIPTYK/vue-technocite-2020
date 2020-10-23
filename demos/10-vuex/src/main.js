import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import "./assets/styles/main.css";
const app = createApp(App);
//set components
const store = createStore({
  state() {
    return {
      counter: 0,
      isAuthenticated:false
    };
  },
  mutations: {
    increment(state) {
        state.counter++
    },
    increase(state,payload){
        state.counter += payload.value
    },
    setAuth(state,payload){
        state.isAuthenticated = payload.value
    }
  },
  actions: {
    increment(context) {
      setTimeout(function() {
        context.commit("increment");
      }, 2000);
    },
    increase(context,payload){
        context.commit("increase",payload)
    },
    login(context){
        context.commit("setAuth",{value:true})
    },
    logout(context){
        context.commit("setAuth",{value:false})
    }
  },
  getters:{
      counter(state){
          return state.counter
      },
      finalCounter(state){
          return state.counter*2
      },
      isAuth(state){
          return state.isAuthenticated
      }
  }
});
app.use(store);
app.mount("#app");
