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
                    <h1>Cars Dealership</h1>
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
    background-color: rgb(44, 44, 44);
    padding-top: 20px;
    h1{
        color: white;
    }
    ul{
        display: flex;
        list-style: none;
        li{
            line-height: 50px;
            color: white;
            margin-right: 10px;

            a{
                text-decoration: none;
                color: white;
            }
        }
    }
}
    
</style>