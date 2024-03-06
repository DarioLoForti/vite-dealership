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
    <div class="col-3">
        <router-link :to="{name: 'car', params: {slug: car.slug} }">
            <div class="card my-2">
                <div class="card-image-top">
                    <img :src="getUrlImage()" alt="car.modello">
                </div>
                <div class="card-title">
                    <h1 class="text-center">{{car['marca']}}</h1>
                    <h2 class="text-center">{{car['modello']}}</h2>
                </div>
                <div class="card-body">
                    <p>{{car['tipologia']}}</p>
                    <p>{{car['cambio']}}</p>
                    <p>Prezzo: &euro{{car['prezzo']}}</p>
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
</style>