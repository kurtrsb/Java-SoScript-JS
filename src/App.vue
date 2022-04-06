<script setup>
import Card from './components/Card.vue';
import stromoyen from "./assets/stromoyen.jpg"
import caillouniney from "./assets/caillouniney.jpg"
import axios from 'axios';


function autoLoad() {
   axios.post('http://127.0.0.1:3001/create',{
                name: "Stromoyen",
                desc: "papa te ou ?",
                price: 453.01,
                type: "Chanteur",
                image: "/src/assets/stromoyen.jpg"
            })
             axios.post('http://127.0.0.1:3001/create',{
                name: "Lil Jeep",
                desc: "i'm a mother f**ng scammer boy",
                price: 5.51,
                type: "Chanteur",
                image: "/src/assets/liljeep.jpg"
            })
             axios.post('http://127.0.0.1:3001/create',{
                name: "Caillouniney",
                desc: "roche",
                price: 4553.01,
                type: "Artiste",
                image: "/src/assets/caillouniney.jpg"
            })
             axios.post('http://127.0.0.1:3001/create',{
                name: "Snoop Cat",
                desc: "Sans assez d'argent pour le canabis vas vers le crack",
                price: 30150.88,
                type: "Chanteur",
                image: "/src/assets/snoopcat.jpg"
            })
            this.$router.push({ name: 'Home' });
            
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="http://127.0.0.1:3000/">Home</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="http://127.0.0.1:3000/create">Create</a>
        </li>
        <a href="http://127.0.0.1:3000/">
        <button @click="autoLoad">Preload</button>
        </a>
      </ul>
    </nav>
  </header>

<router-view></router-view>

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
.navbar navbar-dark bg-dark{
  position: fixed;
  bottom: 1px;
}
</style>
