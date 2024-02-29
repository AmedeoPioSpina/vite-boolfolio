import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue'
import AppMain from './pages/AppMain.vue'
import AppProjects from './pages/AppProjects.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/main',
            name: 'main',
            component: AppMain
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
    ]
});

export { router }