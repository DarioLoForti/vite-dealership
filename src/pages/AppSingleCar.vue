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
        },
        getUrlImage(){
            let image;
            if(this.car.immagine != null){
                image = '/storage/' + this.car.immagine;
            }
            else{
                image = 'img/default.png'
            }
            return `${this.store.baseUrl}/storage/${image}`;
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row" v-if="success">
            <div class="col-12 mt-5">
                <div class="row ">
                    <div class="col-6 image d-flex justify-content-center">
                        <img :src="getUrlImage()" alt="car.modello">
                    </div>
                    
                    <div class="col-6">
                        <div class="row ms-4">

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
                <div class="col-12">
                    <h1 class="">Marca: {{ car.marca }} </h1>
                </div>
                <div class="col-12">
                    <h1 class="">Modello: {{ car.modello }} </h1>
                </div>
                <div class="col-12 text-end">
                    <p> Prezzo: {{car.prezzo}}</p>

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