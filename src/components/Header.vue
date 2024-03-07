<script>
import { store } from '../store.js'
export default {
    name: 'Header',
    data(){
        return{
            store,
          
        }
    },
}
</script>
<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <router-link :to="{ name: 'home' }">
                        <img class='misura-logo' src="../../public/logo.jpg" alt="">
                    </router-link>
                    
                </div>
                <div class="col-8">
                    <ul class='float-end '>
                        <li v-for="item, index in store.menuItems" :key="index">
                            <router-link :to="{ name: item.name }">{{ item.label }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

header{
    width: 100%;
    background-color: #ffa500;
    padding-top: 20px;
  
    ul{
        display: flex;
        list-style: none;
        li{
            line-height: 50px;
            color: black;
            margin-right: 10px;
            padding: 5px 4px;

            a{
                text-decoration: none;
                color: black;
                padding: 5px 4px;
                
                &:hover{
                    color: rgb(63, 63, 63);
                    border-radius: 5px;

                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
                    
                }
            }
        }
    }
    .misura-logo{
        width: 150px;
        
    }
}
    
</style>