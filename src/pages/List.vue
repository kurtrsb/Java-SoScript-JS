<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Card from '../components/Card.vue';
import axios from 'axios';

export default {  
  components:{
    Card,

  },
    data: () => ({
    json: [],
    alt: String,
  }),

 methods:{
     async preload() {
        try {
          const response = await axios.post('http://127.0.0.1:3001/db')
          this.json=response.data
          this.alt="Photo de "


        } catch(err) {

        console.log("err")
        }
     },
     async deleteElement(itemId) {
         try {
        await axios.delete('http://127.0.0.1:3001/'+itemId)
        this.$router.go();
        } catch(err) {

        console.log("err")
        }
     }
 },
 mounted(){

  this.preload()
 }
}


</script>

<template>

<ul class="list-group" style="margin-top:5%">
<li class="list-group-item" style="text-align:left; padding-left: 20% " v-for="item in json" :key="item.name">{{item.name}}<button class="btn btn-danger" style="margin-left: 20px; width: 10%;" v-on:click="deleteElement(item.id)">Supprimer</button></li>
</ul>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
.card-img-top{
  max-height: 230px;
}

</style>