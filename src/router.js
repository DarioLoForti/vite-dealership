import { createRouter, createWebHistory } from 'vue-router';


import AppHome from './pages/AppHome.vue';
import AppNotFound from './pages/AppNotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});
export { router }