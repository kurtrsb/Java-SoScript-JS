<script>

import axios from 'axios';


export default {  
    data: () => ({
    names: "",
    desc: "",
    price: "",
    type: "",
    image: ""
  }),

 methods:{
     async upload() {
        try {
            await axios.post('http://127.0.0.1:3001/create',{
                name: this.names,
                desc: this.desc,
                price: this.price,
                type: this.type,
                image: this.image
            })
            this.$router.push({ name: 'Home' });
            
        } catch(err) {

        console.log("err")
        }
     },
     async autoLoad() {
        try {
            await axios.post('http://127.0.0.1:3001/create',{
                name: "Stromoyen",
                desc: "pas té ou ?",
                price: 453.01,
                type: "Chanteur",
                image: "/src/assets/stromoyen.jpg"
            })
            await axios.post('http://127.0.0.1:3001/create',{
                name: "Lil Jeep",
                desc: "i'm a mother f**ng scammer boy",
                price: 5.51,
                type: "Chanteur",
                image: "/src/assets/liljeep.jpg"
            })
            await axios.post('http://127.0.0.1:3001/create',{
                name: "Caillouniney",
                desc: "pas té ou ?",
                price: 453.01,
                type: "Chanteur",
                image: "/src/assets/stromoyen.jpg"
            })
            await axios.post('http://127.0.0.1:3001/create',{
                name: "Stromoyen",
                desc: "pas té ou ?",
                price: 453.01,
                type: "Chanteur",
                image: "/src/assets/stromoyen.jpg"
            })
            console.log("good")
            
        } catch(err) {

        console.log("err")
        }
     }
 },
}


</script>

<template>
<div style="display: flex; justify-content: center;  margin-left: 2%;margin-right: 2%" >
    <div class="card" style="width: 50%">
        <div class="card-body">
            <h5 class="card-title">Form</h5>
            <form @submit.prevent="upload">
                <input type="text" class="form-control" placeholder="Name" v-model="names" required>
                <input type="text" class="form-control" placeholder="Description" v-model="desc" required>
                <select class="form-control" v-model="type" required>
                    <option>Chanteur</option>
                    <option>Artiste</option>
                    <option>Sportif</option>
                    <option>Au Chomage</option>
                    <option>Etudiant</option>
                    <option>Dieu</option>
                    <option>Personnage</option>
                </select>
                <input type="text" class="form-control" placeholder="Prix" v-model="price" required>
                <input type="text" class="form-control" placeholder="Image(sous forme de lien)" v-model="image" required>
                <a href="http://127.0.0.1:3000/">
                <button class="btn btn-primary" type="submit">Submit</button>
                </a>
            </form>
            
        </div>
    </div>
</div>

</template>