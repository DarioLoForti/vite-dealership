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
        getCars(page_number){
            axios.get(`${this.store.baseUrl}/api/cars`,{
                params: {
                    page: page_number
                }
            }).then((response)=>{
                this.cars = response.data.response.data;
                this.currentPage = response.data.response.current_page
                this.lastPage = response.data.response.last_page
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
                <CarCard v-for="car, index in cars" :key="index" :car="car"/>
            </div>
            <div class="d-flex justify-content-center">
                <button :class="currentPage == 1 ? 'disabled' : '' " class="btn btn-sm btn-square" @click="getCars(currentPage - 1 ) ">
                     precedente
                </button>
                <button :class="currentPage == lastPage ? 'disabled' : '' " class="btn btn-sm btn-square" @click="getCars(currentPage + 1 ) ">
                    successivo
                </button>
               
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