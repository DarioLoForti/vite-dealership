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
            optional: null, 
            selectedOptions: [],
            totalPrice: 0
        }
    },
    created(){
        this.getCar();
        this.getOptional();
    },
    methods: {
        getCar() {
            axios.get(`${this.store.baseUrl}/api/car/${this.$route.params.slug}`,).then((response) => {
                if(response.data.success){
                    this.car = response.data.response;
                    this.success = response.data.success;
                }
                else{
                    this.$router.push({ name: 'not-found'})
                }
            });
        },
        getOptional() {
            axios.get(`${this.store.baseUrl}/api/optionals`).then((response) => {
                if(response.data.success){
                    this.optional = response.data.response;
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
                if(this.car.immagine.includes("https://")){
                    image = 'img/default.png'
                }
                else{
                    image = this.car.immagine;
                }
            }
            else{
                image = 'img/default.png'
            }
            return `${this.store.baseUrl}/storage/${image}`;
        },
        

        addOption(option) {
            this.selectedOptions.push(option);
            this.totalPrice += parseFloat(option.prezzo);
        },

        removeOption(option) {
            const index = this.selectedOptions.indexOf(option);
            if (index !== -1) {
            this.selectedOptions.splice(index, 1);
            this.totalPrice -= parseFloat(option.prezzo);
        }
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
                    <p class="fs-1">Marca: {{ car.marca }} </p>
                </div>
                <div class="col-12">
                    <p class="fs-1">Modello: {{ car.modello }} </p>
                </div>
                <div class="col-12">
                    
                </div>
                <div class="col-2 offset-10 btn btn-sm btn-primary">
                    <h2 class="mt-1"> &euro; {{car.prezzo * 1000}}</h2>

                </div>
            </div>
            <div class="col-6 mt-5">
                    <h2>Optional disponibili:</h2>
                    <ul class="list-unstyled">
                        <li v-for="option in optional" :key="option.id" class="py-2">
                            {{ option.nome }}: &euro; {{ option.prezzo }}
                            <button class="btn btn-sm btn-success" @click="addOption(option)">Aggiungi</button>
                        </li>
                    </ul>
                </div>

                <div class="col-6 mt-5">
                    <h2>Optional selezionati:</h2>
                    <ul class="list-unstyled">
                        <li v-for="option in selectedOptions" :key="option.id" class=py-2>
                            {{ option.nome }}: &euro; {{ option.prezzo }}
                            <button class="btn btn-sm btn-danger" @click="removeOption(option)">Rimuovi</button>
                        </li>
                    </ul>
                </div>

                <div class="col-4 offset-8 btn btn-sm btn-primary mb-5">
                    <h2 class="mt-1"> Prezzo Totale: &euro; {{ this.totalPrice + (car.prezzo * 1000) }}</h2>

                </div>

                

        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
.image{
    img{
        width: 80%;
    }
}
</style>