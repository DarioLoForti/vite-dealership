<script>
import CarCard from '../components/CarCard.vue';
import { store } from '../store.js';
import axios from'axios';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: 'AppCars',
    components:{
        CarCard,
        AppLoader,
    },
    data() {
        return {
            store,
            
            brandFilter: 0,
            cars:[],
            currentPage: 1,
            lastPage: null,
            loading: false,
        }
    },
    created() {
        this.getBrands();
        this.getCars();
    },
    methods: {

        getCars(page_number){
            this.loading = true;
            setTimeout(()=>{

                axios.get(`${this.store.baseUrl}/api/cars/${this.brandFilter}`,{
                    params: {
                        page: page_number
                    }
                }).then((response)=>{
                    
                    this.cars = response.data.response.data;
                    this.currentPage = response.data.response.current_page;
                    this.lastPage = response.data.response.last_page;
                    this.loading = false;
                })
            },2000)
        },

        getBrands(){
            if(store.brands.length == 0){
                axios.get(`${this.store.baseUrl}/api/brands`).then((response)=>{
                    store.brands = response.data.response; 
                })
            }
        
            }
        
    },
}
</script>
<template lang="" >
    <div v-if="loading">
        <AppLoader />
    </div>
    <div class="color" v-show="!loading">
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
            <div class="row" v-if="cars.length != 0">
                <CarCard v-for="car, index in cars" :key="index" :car="car"/>
            </div>
            
            <div class="row my-3" v-else>
                <h3>Nessuna macchina trovata per questo brand.</h3>
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

.loader {
  width: 4.8px;
  height: 4.8px;
  display: block;
  margin: 20px auto;
  position: relative;
  border-radius: 4px;
  color: #FFF;
  background: currentColor;
  box-sizing: border-box;
  animation: animloader 0.3s 0.3s linear infinite alternate;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 4.8px;
  height: 4.8px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15px;
  animation: animloader 0.3s 0.45s linear infinite alternate;
}
.loader::after {
    top: -15px;
    animation-delay: 0s;
}

@keyframes animloader {
    0% { width: 4.8px }
    100% { width: 48px}
}
</style>