import { createRouter, createWebHistory } from 'vue-router';


import AppHome from './pages/AppHome.vue';
import AppSingleCar from './pages/AppSingleCar.vue';
import AppCars from './pages/AppCars.vue';
import AppBrands from './pages/AppBrands.vue';
import AppBrand from './pages/AppBrand.vue';
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
            path: '/cars/:brand_id?',
            name: 'cars',
            component: AppCars
        },
        {
            path: '/car/:slug',
            name: 'car',
            component: AppSingleCar
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