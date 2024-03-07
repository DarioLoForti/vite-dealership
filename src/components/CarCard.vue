<script>
import { store } from '../store.js';
export default {
    name: 'CarCard',
    props: {
        car: Object,
 
    },
    data() {
        return {
            store,
        }
    },

    methods: {
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
        }
    }
}
</script>
<template lang="">
    <div class="col-4">
        <router-link class="text-decoration-none" :to="{name: 'car', params: {slug: car.slug} }">
            <div class="card my-2 altezza-card color">
                <div class="card-image-top m-3">
                    <img :src="getUrlImage()" :alt="car.modello">
                </div>
                <div class="card-title">
                    <h2 class="text-center">{{car['marca']}}</h2>
                    <h4 class="text-center">{{car['modello']}}</h4>
                </div>
                <div class="card-body">
                    <p>Tipo: {{car['tipologia']}}</p>
                    <p>Cambio: {{car['cambio']}}</p>
                    <p>Prezzo auto: &euro;{{car['prezzo'] * 1000}}</p>
                </div>
            </div>
        </router-link>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
img{
    width: 150px;
}
.altezza-card{
    min-height: 500px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

    &:hover{

        box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
    }
}
.color{
    background-color: rgb(253, 172, 22);
}
</style>