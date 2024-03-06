<script>
export default {
    name: 'Home'
}
</script>
<template lang="">
    <div class="text-center ">
        <h1 class='text-center'> Benvenuti </h1>
        <router-link class="text-decoration-none color" :to="{ name: 'cars'}"><button class="bottone">{{'Automobili'}}</button></router-link>

        
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
.bottone {
padding: 12px 20px;
background-color: orange;
border: 1px solid orange;
border-radius: 10px;
    &:hover {
        background-color: white;
        color: orange;
        border: 2px solid orange;
    }
}
    
   
</style>