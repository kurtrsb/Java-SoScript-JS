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
    totPrice: 0,
    alt: String,
    size: 0
  }),

 methods:{
     async preload() {
        try {
          const response = await axios.post('http://127.0.0.1:3001/db')
          this.json=response.data
          for (let i = 0; i < this.json.length; i++) {
            this.totPrice += this.json[i].price 
          }
        this.size = this.json.length
        } catch(err) {

        console.log("err")
        }
     },
 },
 mounted(){

  this.preload()
 },

  computed:{
    

},


}


</script>

<template>
  <div  class="row row-cols-1 row-cols-md-4 g-3 " style="display: flex; justify-content: center;  margin-left: 2%;margin-right: 2% ;" >
    <Card v-for="item in json" :key="item.name"
      :cardTitle= item.name
      :cardImg= item.image
      :cardImgAlt= "alt + item.name"
      :cardText= item.desc
      :cardType= item.type
      :cardPrice= item.price
      :cardLink="'http://127.0.0.1:3000/'+item.id"
    />

</div>
    <footer class="bg-light text-center text-lg-start">
  
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    Prix Total: {{totPrice}} Nombre de sosies: {{size}}
    
  </div>
 
</footer>


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