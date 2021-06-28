<template>
    <div class="container">
       <div>
            <h1>Votez est une plateforme sécurisée pour effectuer votre <mark>vote électorale</mark></h1>
            <p>Notre application est la solution proposée par l’État pour sécuriser et simplifier le vote électoral en ligne.</p>
            <div class="icon-container">
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
       <div class="texte d'explications">
           <p>test</p>
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
    padding: 40px 235px;
}

.icon-container{
    display: flex;
    justify-content: space-between;
}

</style>