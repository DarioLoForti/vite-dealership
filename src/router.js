import { createRouter, createWebHistory } from 'vue-router';


import AppHome from './pages/AppHome.vue';
import AppSingleCar from './pages/AppSingleCar.vue';
import AppCars from './pages/AppCars.vue';
import AppNotFound from './pages/AppNotFound.vue';
import AppBrands from './pages/AppBrands.vue';
import AppBrand from './pages/AppBrand.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/cars/:slug',
            name: 'car',
            component: AppSingleCar
        },
        {
            path: '/cars',
            name: 'cars',
            component: AppCars
        },
        {
            path: '/brands',
            name: 'brands',
            component: AppBrands
        },
        {
            path: '/brand/:id',
            name: 'brand',
            component: AppBrand
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});
export { router }