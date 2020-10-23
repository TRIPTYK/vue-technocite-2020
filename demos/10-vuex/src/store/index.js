import { createStore } from "vuex";
import actions from './actions'
import mutations from  './mutations'
import getters from './getters'
import counterModule from "./counter";
const store = createStore({
    modules:{
        numbers: counterModule
    },
  state() {
    return {
      isAuthenticated: false,
    };
  },
  mutations,
  actions,
  getters
});
export default store;
