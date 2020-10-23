import {createStore} from 'vuex'
import skusModule from './modules/skus'
import cartModule from './modules/cart'
const store = createStore({
    modules:{
        skus:skusModule,
        cart:cartModule
    }
})
export default store