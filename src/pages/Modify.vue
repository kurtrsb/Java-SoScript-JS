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
    names: "",
    desc: "",
    price: 0,
    type: "",
    image: ""
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
     },
     async upload() {
        try {
            const url = "http://127.0.0.1:3001/"+this.$route.params.id
            await axios.put(url,{
                name: this.names,
                desc: this.desc,
                price: this.price,
                type: this.type,
                image: this.image
            })
            this.$router.push({  name: 'Info Carte', params: { id: this.$route.params.id } });
            
        } catch(err) {

        console.log("err")
        }
     },
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
      :cardImgAlt= "alt + json?.name"
      :cardText= json?.desc
      :cardType= json?.type
      :cardPrice= json?.price
      @deleteElement='deleteElement'
    />
</div>

<div style="display: flex; justify-content: center;  margin-left: 2%;margin-right: 2%" >
    <div class="card" style="width: 50%">
        <div class="card-body">
            <h5 class="card-title">Form</h5>
            <form @submit.prevent="upload">
                <input type="text" class="form-control" :placeholder=json?.name v-model="names">
                <input type="text" class="form-control" :placeholder=json?.desc v-model="desc">
                <select class="form-control" v-model="type">
                    <option>Chanteur</option>
                    <option>Artiste</option>
                    <option>Sportif</option>
                    <option>Au Chomage</option>
                    <option>Etudiant</option>
                    <option>Dieu</option>
                    <option>Personnage</option>
                </select>
                <input type="text" class="form-control" :placeholder=json?.price v-model="price">
                <input type="text" class="form-control" :placeholder=json?.image v-model="image">
                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
            
        </div>
    </div>
</div>

</template>