<script>


export default {
    props:{
        cardTitle: String,
        cardText: String,
        cardImg: String,
        cardImgAlt: String,
        cardPrice: Number,
        cardType: String
    }
}

</script>

<template>


    <div class="myarticlecard bg-dark mb-3" style="width: 90%; margin-top: 5%;">
        <img class="myarticleimg " :src="cardImg" :alt="cardImgAlt">
        <div class="mycard">
            <h5 class="myarticletitle text-white">{{cardTitle}}</h5>
            <p class="myarticletext text-white">{{cardText}}</p>
            <ul class="text-white bg-dark list-group list-group-flush ">
                <li class="text-white bg-dark list-group-item">Type : {{cardType}}</li>
                <li class="text-white bg-dark list-group-item">Prix : {{cardPrice}}€</li>
            </ul>
            <button class="btn btn-danger" style="margin: 20px; width: 95%;">Supprimer</button>
        </div>
    </div>
</template>

