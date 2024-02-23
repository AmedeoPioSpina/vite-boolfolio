import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            name: 'home',
            components: AppHome
        },
    ]
});

export { router }