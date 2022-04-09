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
    type: "",
    
  }),

 methods:{
     async preload() {
        try {
          const response = await axios.post('http://127.0.0.1:3001/db')
          this.json=response.data
          this.alt="Photo de "
          this.type="Aucun"

        } catch(err) {

        console.log("err")
        }
     },
     async deleteElement(itemId) {
         try{
            await axios.delete('http://127.0.0.1:3001/'+itemId)
            this.json.splice(this.json.map(function(e) { return e.id; }).indexOf(itemId),1)
        } catch(err) {

        console.log("err")
        }
     },
     
 },
 mounted(){

  this.preload()
 },
 computed  :{
     tabFilter: function() {
         return this.json.filter(i => i.type === this.type||this.type==="Aucun")
        
     }
 }
}


</script>

<template>
<div style="display: flex; justify-content: center;  margin-left: 2%;margin-right: 2%" >
    <div class="card" style="width: 50%">
        <div class="card-body">
<form>
    <label for="form-control">Filtre</label>
<select class="form-control" v-model="type">
    <option>Chanteur</option>
    <option>Artiste</option>
    <option>Sportif</option>
    <option>Au Chomage</option>
    <option>Etudiant</option>
    <option>Dieu</option>
    <option>Personnage</option>
    <option selected>Aucun</option>
</select>
</form>
</div>
</div>
</div>

<ul class="list-group" style="margin-top:5%">
<li class="list-group-item" style="text-align:left; padding-left: 20% " v-for="item in tabFilter" :key="item.id">{{item.name}} || {{item.type}}<button class="btn btn-danger" style="margin-left: 20px; width: 10%;" v-on:click="deleteElement(item.id)">Supprimer</button></li>
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