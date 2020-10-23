import {createStore} from 'vuex'
import skusModule from './modules/skus'
const store = createStore({
    modules:{
        skus:skusModule
    }
})
export default store