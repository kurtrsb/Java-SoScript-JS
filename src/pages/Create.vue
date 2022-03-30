<script>

import axios from 'axios';


export default {  
    data: () => ({
    names: "",
    desc: "",
    price: "",
    type: ""
  }),

 methods:{
     async upload() {
        try {
            await axios.post('http://127.0.0.1:3001/create',{
                name: this.names,
                desc: this.desc,
                price: this.price,
                type: this.type
            })
            this.$router.push({ name: 'Home' });
            
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
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFile" required>
                    <label class="custom-file-label" for="customFile">Photo du Sosie</label>
                </div>
                <a href="http://127.0.0.1:3000/home">
                <button class="btn btn-primary" type="submit">Submit</button>
                </a>
            </form>
            
        </div>
    </div>
</div>

</template>