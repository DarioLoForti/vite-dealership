import { createRouter, createWebHistory } from 'vue-router';


import AppHome from './pages/AppHome.vue';
import AppSingleCar from './pages/AppSingleCar.vue';
import AppCars from './pages/AppCars.vue';
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
            path: '/car/:slug',
            name: 'car',
            component: AppSingleCar
        },
        {
            path: '/cars',
            name: 'cars',
            component: AppCars
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});
export { router }