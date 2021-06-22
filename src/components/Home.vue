<template>
    <div class="container">
       <div>
            <h1>Votez est une plateforme sécurisée pour effectuer votre <mark>vote électorale</mark></h1>
            <p>Notre application est la solution proposée par l’État pour sécuriser et simplifier le vote électoral en ligne.</p>
            <div>
                <img src="./images/fusee.png" alt="fusée">
                <p>Gagnez du temps</p>
            </div>
            <div>
                <img src="./images/bouclier.png" alt="fusée">
                <p>Sécurisez vos informations</p>
            </div>
            <div>
                <img src="./images/compte.png" alt="fusée">
                <p>Ne créez plus de nouveau compte</p>
            </div>
       </div>
    </div>
   

</template>

<script>


module.exports = {
    name:'Home',
    props:{
        users:{type:String,default:''},
    },
    data(){
       return{
           test:''
       }
   }
  
}
</script>

<style scoped>
.container{
    background-color: #f7f7f7;
    height: 20vh;
}
</style>