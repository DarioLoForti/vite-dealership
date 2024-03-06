<script>
import { store } from '../store.js'
import axios from 'axios';

export default {
    name: 'AppSigleCar',
    props: {
        car: Object
    },
    data(){
        return{
            store,
            car: null,
            success: null,
        }
    },
    created(){
        this.getcar();
    },
    methods: {
        getcar() {
            axios.get(`${this.store.baseUrl}/api/cars/${this.$route.params.slug}`,).then((response) => {
                if(response.data.success){
                    this.car = response.data.car;
                    this.success = response.data.success;
                }
                else{
                    this.$router.push({ name: 'not-found'})
                }
            });
        },
        getUrlImage(){
            let image;
            if(this.car.immagine!= null){
                image = '/storage/' + this.car.immagine;
            }
            else{
                image = ''
            }
            return `${this.store.baseUrl}/storage/${image}`;
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row" v-if="success == true">
            <div class="col-12">
                <div class="image d-flex justify-content-center">
                    <img :src="getUrlImage()" alt="car.modello">
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
                    <p> cambio:  {{car.cambio}} </p>
                </div>
                <div class="col-12">
                    <p> porte:  {{car.porte}} </p>
                </div>
                <div class="col-12">
                    <p> posti:  {{car.posti}} </p>
                </div>
                <div class="col-12">
                    <p> tipologia:  {{car.tipologia}} </p>
                </div>
                <div class="col-12">
                    <p> stato:  {{car.stato}} </p>
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