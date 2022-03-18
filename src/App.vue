<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Card from './components/Card.vue';
import stromoyen from "./assets/stromoyen.jpg"
</script>

<template>
  <div class="row row-cols-1 row-cols-md-3 g-3 " style="display: flex; justify-content: center;  margin-left: 2%;margin-right: 2% ;">
    <Card
      cardTitle="Stromoyen"
      :cardImg="stromoyen"
      cardImgAlt="Photo de Storomoyen"
      cardText="description complete"
      cardType="Chanteur"
      cardPrice="5,46"
    />

    <Card
      cardTitle="Lorem"
      :cardImg="stromoyen"
      cardImgAlt="Photo de Storomoyen"
      cardText="Lorem ipsum dolor sit ametnd ut erat eu ornare. Maecenas vel auctor nibh. Etiam imperdiet rutrum nibh aliquet suscipit. Cras nisl ipsum, aliquet a sapien in, gravida lacinia augue. Nunc et dui volutpat, dapibus arcu eu, convallis erat."
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
