<script>
import Header from './components/Header.vue';
export default {
  components:{
    Header,
   
  }
}
</script>
<template lang="">
  <Header/>
  <router-view></router-view>
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
</style>