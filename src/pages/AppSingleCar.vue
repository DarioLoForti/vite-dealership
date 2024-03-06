<script>
import { store } from '../store.js'
import axios from 'axios';

export default {
    name: 'AppSingleCar',
    data(){
        return{
            store,
            car: null,
            success: null,
        }
    },
    created(){
        this.getCar();
    },
    methods: {
        getCar() {
            axios.get(`${this.store.baseUrl}/api/cars/${this.$route.params.slug}`,).then((response) => {
                if(response.data.success){
                    this.car = response.data.response;
                    this.success = response.data.success;
                }
                else{
                    this.$router.push({ name: 'not-found'})
                }
            });
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row" v-if="success">
            <div class="col-12">
                <div class="image d-flex justify-content-center">
                    <img :src="car.immagine ? `${car.immagine}` : ''" alt="${car.modello}">
                </div>
                <div class="col-12">
                    <h1 class="text-center py-5">Marca: {{ car.marca}} </h1>
                </div>
                <div class="col-12">
                    <h1 class="text-center py-5">Modello: {{ car.modello}} </h1>
                </div>
                <div class="col-12">
                    <p> Prezzo: {{car.prezzo}}</p>
                </div>
                <div class="col-12">
                    <p> Alimentazione:  {{car.alimentazione}} </p>
                </div>
                <div class="col-12">
                    <p> Cilindrata:  {{car.cilindrata}} </p>
                </div>
                <div class="col-12">
                    <p> Cambio:  {{car.cambio}} </p>
                </div>
                <div class="col-12">
                    <p> Porte:  {{car.porte}} </p>
                </div>
                <div class="col-12">
                    <p> Posti:  {{car.posti}} </p>
                </div>
                <div class="col-12">
                    <p> Tipologia:  {{car.tipologia}} </p>
                </div>
                <div class="col-12">
                    <p> Stato:  {{car.stato}} </p>
                </div>
                <div class="col-12">
                    <p> Anno Immatricolazione:  {{car.anno_immatricolazione}} </p>
                </div>
                <div class="col-12">
                    <p> Chilometri:  {{car.km}} </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
.image{
    img{
        width: 200px;
    }
}
</style>