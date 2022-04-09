<script setup>
import Card from './components/Card.vue';
import axios from 'axios';


function autoLoad() {
   axios.post('http://127.0.0.1:3001/create',{
                name: "Kurt Cubain",
                desc: "A ne pas confondre avec le pays",
                price: 0.01,
                type: "Dieu",
                image: "/src/assets/kurtcubain.jpg"
            })
             axios.post('http://127.0.0.1:3001/create',{
                name: "Mateo Pas Sacre",
                desc: "Loins d'etre benis, pas dans le haram",
                price: -6.66,
                type: "Au Chomage",
                image: "/src/assets/mateopassacre.jpg"
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
