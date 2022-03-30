<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Card from './components/Card.vue';
import axios from 'axios';
import { computed } from '@vue/runtime-core';




export default {
  components:{
    Card,

  },
    data: () => ({
    json: [],
  }),

 methods:{
     async preload() {
        try {
          const response = await axios.post('http://127.0.0.1:3001/db')
          /*let parsed = JSON.parse(response.data.map);
          this.json = response.data.map( item => ({name:item.name}));*/
          

          console.log(response.data)
          
        } catch(err) {
          
        console.log("err")
        }
     }
 },
 mounted(){
  console.log("test start")
  this.preload()
 },
  computed:{
    done() {

      return this.json
    },

},


}


</script>

<template>
  <div class="row row-cols-1 row-cols-md-3 g-3 " style="display: flex; justify-content: center;  margin-left: 2%;margin-right: 2% ;">
    <Card
      cardTitle= {{done}}
      cardImg= "/src/assets/stromoyen.jpg"
      cardImgAlt="Photo de Storomoyen"
      cardText="description complete"
      cardType="Chanteur"
      cardPrice="5,46"
    />

    <p>{{done}}</p>

    
  </div>
  
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
</style>
