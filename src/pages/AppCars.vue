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
            brandFilter: 0,
            cars:[],
            currentPage: 1,
            lastPage: null,
        }
    },
    created() {
        this.getBrands();
        this.getCars();
    },
    methods: {
        getBrands(){
            if(store.brands.length == 0){
                axios.get(`${this.store.baseUrl}/api/brands`).then((response)=>{
                    store.brands = response.data.response;
                    //console.log(store.brands);
                })
            }
        },
        /* getOptionals(){

        }, */
        getCars(){
            axios.get(`${this.store.baseUrl}/api/cars/${this.brandFilter}`).then((response)=>{
                this.cars = response.data.response;
            })
        },
    },
}
</script>
<template lang="">
    <div class="color">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center my-4">
                    <h1>Elenco automobili</h1>
                </div>
            </div>
            <div class="row">
                <select class="form-select" v-model="this.brandFilter" @change="this.getCars()">
                    <option selected value="0">Brand Selection</option>
                    <option v-for="brand, index in store.brands" :value="brand.id">{{brand.nome}}</option>
                </select>
            </div>
            <div class="row">
                <CarCard v-for="car, index in cars" :key="index" :car="car"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

    // .color{
    //     background-color: orange;
    // }
</style>