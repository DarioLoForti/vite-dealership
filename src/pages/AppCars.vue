<script>
import CarCard from '../components/CarCard.vue';
import { store } from '../store.js';
import axios from'axios';

export default {
    name: 'AppCars',
    components:{
        CarCard,
    },
    data() {
        return {
            store,
            cars:[],
            currentPage: 1,
            lastPage: null,
        }
    },
    created() {
        this.getCars();
    },
    methods: {
        getCars(){
            axios.get(`${this.store.baseUrl}/api/cars`).then((response)=>{
                this.cars = response.data.response;
            })
        }
    },
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1></h1>
                </div>
            </div>
            <div class="row">
                <CarCard v-for="car, index in cars" :key="index" :car="car"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

    
</style>