<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import axios from 'axios';
import BigCard from '../components/BigCard.vue';

export default {
  components:{
    BigCard
},
    data: () => ({
    json: [],
    alt: String,
  }),

 methods:{
     async preload() {
        try {
            const url = "http://127.0.0.1:3001/"+this.$route.params.id
            const response = await axios.get(url)
            this.json=response.data

        } catch(err) {

        console.log("err",err)
        }
     },
     async deleteElement() {
       try {
            const url = "http://127.0.0.1:3001/"+this.$route.params.id
            const response = await axios.delete(url)
            this.$router.push({ name: 'Home' });
            
        } catch(err) {

        console.log("err ", err)
        }
     }
     
 },
 mounted(){
  this.preload()
 },
}


</script>

<template>
  <div  class="row row-cols-1 row-cols-md-3 g-3 " style="display: flex; justify-content: center;  margin-left: 2%;margin-right: 2% ;" >
    <BigCard
      :cardTitle= json?.name
      :cardImg= json?.image
      :cardImgAlt= json?.name
      :cardText= json?.desc
      :cardType= json?.type
      :cardPrice= json?.price
      :editLink = "'http://127.0.0.1:3000/edit/'+this.$route.params.id"
      @deleteElement='deleteElement'
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