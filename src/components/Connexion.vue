<template>
    <div class="container">
        <h1 class="header-title">Connexion</h1>
        <div>
            <form action="">
                <label for="email"><span>*</span> Adresse électronique(exemple : nom@exemple.fr)</label>
                <input type="text">
                <label for="password"><span>*</span> Mot de passe</label>
                <input type="password">

            </form>
        </div>
        
    </div>
    
</template>

<script>
module.exports = {
    name:'Connexion'
}
</script>
<style scoped>

.container{
    padding: 20px;
    background-color: #f7f7f7;
}

.header-title{
    text-transform: uppercase;
    letter-spacing: 1.5%;
}
</style>