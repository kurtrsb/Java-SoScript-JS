<script>


export default {
    props:{
        cardTitle: String,
        cardText: String,
        cardImg: String,
        cardImgAlt: String,
        cardPrice: Number,
        cardType: String,
        editLink:String
    },
    methods:{
        async deleteElement(){
            this.$emit("deleteElement");
        },
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
            <a :href="editLink"><button class="btn btn-primary" style="margin: 20px; width: 95%;">Modifier</button></a>
            <button class="btn btn-danger" style="margin: 20px; width: 95%;" v-on:click="deleteElement">Supprimer</button>
        </div>
    </div>
</template>

