<script setup>
import Card from './components/Card.vue';
import stromoyen from "./assets/stromoyen.jpg"
import caillouniney from "./assets/caillouniney.jpg"
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="http://127.0.0.1:3000/">Home</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="http://127.0.0.1:3000/create">Create</a>
        </li>
        <button>Preload</button>
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
