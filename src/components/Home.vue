<template>
    <div class="container">
        <h1>Votez est une plateforme sécurisée pour effectuer votre <strong>vote électorale</strong></h1>
        <p>Notre application est la solution proposée par l’État pour sécuriser et simplifier le vote électoral en ligne.</p>
        <div class="icon-container">
            <div>
                <img src="./images/fusee.png" alt="fusée">
                <p style="text-align: center;">Gagnez du temps</p>
            </div>
            <div>
                <img src="./images/bouclier.png" alt="fusée">
                <p style="text-align: center;">Sécurisez vos informations</p>
            </div>
            <div>
                <img src="./images/compte.png" alt="fusée">
                <p style="text-align: center;">Ne créez plus de nouveau compte</p>
            </div>
       </div>
       <h2>Comment ça marche?</h2>
    <div class="text-container">
        <p style="display: flex;justify-content: flex-end;">1<br>Lors de ma démarche en ligne, je clique sur le lien du mail.</p>
        <p style="display: flex;justify-content: flex-start;">2<br>Lors de ma démarche en ligne, je clique sur le lien du mail.</p>
        <p style="display: flex;justify-content: flex-end;">3<br>Lors de ma démarche en ligne, je clique sur le lien du mail.</p>
        <p style="display: flex;justify-content: flex-start;">4<br>Lors de ma démarche en ligne, je clique sur le lien du mail.</p>
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

strong{
    color: #034EA2;
}

.text-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.icon-container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

h1{
    font-size: xx-large;
    color: #3E4553;
}

h2{
    color: #034EA2;
    font-size: xx-large;
}

p{
    font-size: medium;
}

</style>