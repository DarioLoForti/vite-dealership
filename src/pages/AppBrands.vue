<script>
import BrandCard from '../components/BrandCard.vue';
import { store } from '../store.js';
import axios from'axios';

export default {
    name: 'AppBrands',
    components:{
        BrandCard,
    },
    data() {
        return {
            store,
            currentPage: 1,
            lastPage: null,
        }
    },
    created() {
        this.getBrands();
    },
    methods: {
        getBrands(){
            if(store.brands.length == 0){
                setTimeout(()=>{
                axios.get(`${this.store.baseUrl}/api/brands`).then((response)=>{
                    store.brands = response.data.response;
                })
            },2000)
            }
        },
    },
}
</script>
<template lang="">
    <div v-if="loading">
        <AppLoader />
    </div>
    <div class="color" v-show="!loading">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center my-4">
                    <h1>Elenco Brand</h1>
                </div>
            </div>
            <div class="row">
                <BrandCard v-for="brand, index in store.brands" :key="index" :brand="brand"/>
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