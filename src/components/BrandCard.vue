<script>
import { store } from '../store.js';
export default {
    name: 'BrandCard',
    props: {
        brand: Object,
 
    },
    data() {
        return {
            store,
        }
    },
}
</script>
<template lang="">
    <div class="col-4">
        <router-link class="text-decoration-none" :to="{name: 'brand', params: {id: brand.id} }">
            <div class="card my-2 altezza-card color">
                
                <div class="card-title">
                    <h2 class="text-center">{{brand.nome}}</h2>
                    <h4 class="text-center">{{brand.indirizzo}}</h4>
                </div>
                <div class="card-body">
                    <p>Mail: {{brand.mail}}</p>
                    <p>Sito Web: {{brand.sito_web}}</p>
                    <p>Tipologia: {{brand.tipologia}}</p>
                    <p>Nazionalità: {{brand.nazione}}</p>
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