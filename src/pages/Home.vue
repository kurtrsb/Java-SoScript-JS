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
     }
 },
 mounted(){

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
  <div  class="row row-cols-1 row-cols-md-3 g-3 " style="display: flex; justify-content: center;  margin-left: 2%;margin-right: 2% ;" >
    <Card v-for="item in json" :key="item.name"
      :cardTitle= item.name
      :cardImg= item.image
      :cardImgAlt= "alt + item.name"
      :cardText= item.desc
      :cardType= item.type
      :cardPrice= item.price
      :cardLink="'http://127.0.0.1:3000/home/'+item.id"
    />
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
.card-img-top{
  max-height: 230px;
}

</style>