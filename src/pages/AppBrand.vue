<script>
import { store } from '../store.js'
import axios from 'axios';

export default {
    name: 'AppBrand',
    data(){
        return{
            store,
            brand: null,
            success: null,
        }
    },
    created(){
        this.getBrand();
        
    },
    methods: {
        getBrand(){
                axios.get(`${this.store.baseUrl}/api/brands/${this.$route.params.id}`).then((response)=>{
                    if(response.data.success){
                    this.brand = response.data.response;
                    this.success = response.data.success;
                }
                else{
                    this.$router.push({ name: 'not-found'})
                }
                })
        
        },
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row" v-if="success">
            <div class="col-12 mt-5">
                <div class="row ">
                    <div class="col-12">
                        <div class="row ms-4">

                            <div class="col-12">
                                <p> Alimentazione:  {{brand.nome}} </p>
                            </div>
                            <div class="col-12">
                                <p> Cilindrata:  {{brand.indirizzo}} </p>
                            </div>
                            <div class="col-12">
                                <p> Cambio:  {{brand.mail}} </p>
                            </div>
                            <div class="col-12">
                                <p> Sito Web:  {{brand.sito_web}}</p>
                            </div>
                            <div class="col-12">
                                <p> Tipologia:  {{brand.tipologia}} </p>
                            </div>
                            <div class="col-12">
                                <p> Nazione:  {{brand.nazione}} </p>
                            </div>
                        </div>
                    </div>
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