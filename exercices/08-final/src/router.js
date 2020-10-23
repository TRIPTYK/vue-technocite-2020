import {createRouter, createWebHistory} from "vue-router"
import Shop from './components/pages/Shop'
import Cart from './components/pages/Cart'
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:"/shop", component:Shop, alias:'/'},
        {path:"/cart", component:Cart}
    ]
})

export default router