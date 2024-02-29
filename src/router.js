import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue'
import AppMain from './pages/AppMain.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppHome
        },
        {
            path: '/main',
            component: AppMain
        },
    ]
});

export { router }