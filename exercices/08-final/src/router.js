import {createRouter, createWebHistory} from "vue-router"
import Shop from './components/pages/Shop'
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:"/shop", component:Shop, alias:'/'}
    ]
})

export default router