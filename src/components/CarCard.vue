<script>
export default {
    name: 'CarCard',
    props: {
        car: Object,
 
    },
}
</script>
<template lang="">
    <div class="col-3">
        <router-link :to="{name: 'car', params: {slug: car.slug} }">
            <div class="card my-2">
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
</style>