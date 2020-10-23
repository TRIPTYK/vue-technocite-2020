import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Login from './components/pages/Login'
import DashBoard from './components/pages/Dashboard'
import Team from './components/pages/Team'
import Projects from './components/pages/Projects'
import ProjectDetails from './components/pages/ProjectDetails'
import NotFound from './components/pages/NotFound'
import "./assets/styles/main.css"
const app = createApp(App)
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/login',component:Login,alias:'/'},
        {path:'/test',redirect:'/dashboard'},
        {path:'/dashboard',component:DashBoard, children:[
            {path:'team',component:Team},
            {path:'projects',component:Projects},
            {path:'projects/:id',component:ProjectDetails},
        ]},
        {path:'/:NotFound(.*)',component:NotFound},
    ]
})
app.use(router)
//set components
app.mount('#app')
