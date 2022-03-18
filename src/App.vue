<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Card from './components/Card.vue';
import stromoyen from "./assets/stromoyen.jpg"
import caillouniney from "./assets/caillouniney.jpg"
</script>

<template>
<div style="display: flex; justify-content: center;">
  <div class="card text-white bg-dark rounded-pill">
    <div class="card-body">
      <h1 class="card-title display-1">Collection de sosies approximatifs</h1>
    </div>
  </div>
</div>



  <div class="row row-cols-1 row-cols-md-3 g-3 " style="display: flex; justify-content: center;  margin-left: 2%;margin-right: 2% ;">
    <Card
      cardTitle="Stromoyen"
      :cardImg="stromoyen"
      cardImgAlt="Photo de Stromoyen"
      cardText="description complete"
      cardType="Chanteur"
      cardPrice="5,46"
    />

    <Card
      cardTitle="Caillou Niney"
      :cardImg="caillouniney"
      cardImgAlt="Photo de caillou niney"
      cardText="Loreavida lacinia augue. Nunc et dui volutpat, dapibus arcu eu, convallis erat."
      cardType="Acteur"
      cardPrice="12.69"
    />

    <Card
      cardTitle="Lorem"
      :cardImg="stromoyen"
      cardImgAlt="Photo de Storomoyen"
      cardText="non"
      cardType="ipsum"
      cardPrice="5,46"
    />

    <Card
      cardTitle="Lorem"
      :cardImg="stromoyen"
      cardImgAlt="Photo de Storomoyen"
      cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend ut erat eu ornare. Maecenas vel auctor nibh. Etiam imperdiet rutrum nibh aliquet suscipit. Cras nisl ipsum, aliquet a sapien in, gravida lacinia augue. Nunc et dui volutpat, dapibus arcu eu, convallis erat."
      cardType="ipsum"
      cardPrice="5,46"
    />

    <Card
      cardTitle="Lorem"
      :cardImg="stromoyen"
      cardImgAlt="Photo de Storomoyen"
      cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend ut erat eu ornare. Maecenas vel auctor nibh. Etiam imperdiet rutrum nibh aliquet suscipit. Cras nisl ipsum, aliquet a sapien in, gravida lacinia augue. Nunc et dui volutpat, dapibus arcu eu, convallis erat."
      cardType="ipsum"
      cardPrice="5,46"
    />

    <Card
      cardTitle="Lorem"
      :cardImg="stromoyen"
      cardImgAlt="Photo de Storomoyen"
      cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend ut erat eu ornare. Maecenas vel auctor nibh. Etiam imperdiet rutrum nibh aliquet suscipit. Cras nisl ipsum, aliquet a sapien in, gravida lacinia augue. Nunc et dui volutpat, dapibus arcu eu, convallis erat."
      cardType="ipsum"
      cardPrice="5,46"
    />

    <Card
      cardTitle="Lorem"
      :cardImg="stromoyen"
      cardImgAlt="Photo de Storomoyen"
      cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend ut erat eu ornare. Maecenas vel auctor nibh. Etiam imperdiet rutrum nibh aliquet suscipit. Cras nisl ipsum, aliquet a sapien in, gravida lacinia augue. Nunc et dui volutpat, dapibus arcu eu, convallis erat."
      cardType="ipsum"
      cardPrice="5,46"
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
</style>
