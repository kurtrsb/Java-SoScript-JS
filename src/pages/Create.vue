<template>
<div style="display: flex; justify-content: center;  margin-left: 2%;margin-right: 2%" >
    <div class="card" style="width: 50%">
        <div class="card-body">
            <h5 class="card-title">Form</h5>
            <form>
                <input type="text" class="form-control" placeholder="Name">
                <input type="text" class="form-control" placeholder="Description">
                <select class="form-control">
                    <option>Chanteur</option>
                    <option>Artiste</option>
                    <option>Sportif</option>
                    <option>Au Chomage</option>
                    <option>Etudiant</option>
                    <option>Dieu</option>
                    <option>Personnage</option>
                </select>
                <input type="text" class="form-control" placeholder="Prix">
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFile">
                    <label class="custom-file-label" for="customFile">Photo du Sosie</label>
                </div>
                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
            
        </div>
    </div>
</div>

</template>