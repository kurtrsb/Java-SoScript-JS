<script>


export default {
    props:{
        cardTitle: String,
        cardText: String,
        cardImg: String,
        cardImgAlt: String,
        cardPrice: String,
        cardType: String
    }
}

</script>

<template>
<div class="card text-white bg-dark" style="width: 20rem; margin: 2%;" >
    <img  class="card-img-top" :src="cardImg" :alt="cardImgAlt" >
    <div class="card-body ">
        <h5 class="card-title">{{cardTitle}}</h5>
        <p class="card-text">{{cardText}}</p>
    </div>
    <ul class="text-white bg-dark list-group list-group-flush ">
        <li class="text-white bg-dark list-group-item">Type : {{cardType}}</li>
        <li class="text-white bg-dark list-group-item">Prix : {{cardPrice}}€</li>
    </ul>
</div>
</template>


