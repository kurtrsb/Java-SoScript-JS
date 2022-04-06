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


    <div class="myarticlecard text_white bg-dark mb-3" style="width: 90%">
        <img class="myarticleimg" :src="cardImg" :alt="cardImgAlt">
         <div class="card-body ">
            <h5 class="myarticletitle">{{cardTitle}}</h5>
            <p class="myarticletext">{{cardText}}</p>
            <ul class="text-white bg-dark list-group list-group-flush ">
                <li class="text-white bg-dark list-group-item">Type : {{cardType}}</li>
                <li class="text-white bg-dark list-group-item">Prix : {{cardPrice}}€</li>
            </ul>
        </div>
        
    </div>
</template>

