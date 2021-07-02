<template>
    <div class="container">
        <h1>Votez est une plateforme sécurisée pour effectuer votre <strong>vote électorale</strong></h1>
        <p>Notre application est la solution proposée par l’État pour sécuriser et simplifier le vote électoral en ligne.</p>
        <div class="icon-container">
            <div>
                <img src="./images/fusee.png" alt="fusée">
                <p style="text-align: center;color: #3E4553;">Gagnez du temps</p>
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
        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin-top:125px;">
            <iframe style="width:75%;height:65%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x78xrdm" width="100%" height="100%" allowfullscreen > </iframe>
        </div>
        <h2>Comment ça marche?</h2>
        <div class="text-container">
            <p class="opac-text" style="align-self: flex-end; font-size: x-large;"><b>1</b><br>Lors de ma démarche en ligne, <b>je clique sur le lien du mail.</b></p>
            <p class="opac-text" style="font-size: x-large;"><b>2</b><br>J'effectue mon vote en <b>lisant bien la description</b></p>
            <p class="opac-text" style="align-self: flex-end; font-size: x-large;"><b>3</b><br>Je <b>vérifie</b> avant de valider.</p>
            <p class="opac-text" style="font-size: x-large;"><b>4</b><br><b>Un courriel de validation</b> m'a été envoyé.</p>
        </div>
        <div class="help" style="margin: 0 auto; background-color: #e5edf5;">
            <h2>Besoin d'aide ?</h2>
            <a href="./#/aide" class="button">Consulter notre FAQ</a>
        </div>
        <div class="voter" style="margin: 0 auto;">
            <h2>Commencer à voter !</h2>
            <div class="button-container">
                <a href="./#/connexion" class="button">Se connecter</a>
                <a href="./#/inscription" class="button">S'inscrire</a>
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
    padding: 40px 235px;
}

strong{
    color: #034EA2;
}

.text-container{
    display: flex;
    padding: 3% 12%;
    flex-direction: column;
    justify-content: space-around;
}

.text-container > p {
  flex: 1 1 auto;
  margin: 75px;
}

.icon-container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.button-container{
    margin-right: 60%;
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
    margin-top: 75px;
    margin-bottom: 25px;
}

p{
    font-size: medium;
}

@keyframes fromLeft {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(-100%, 0, 0);
		transform: translate3d(-100%, 0, 0);
	}
	100% {
		opacity: 1;
		-webkit-transform: none;
		transform: none;
	}
}

/* The element to apply the animation to */
.opac-text {
  animation-name: fromLeft;
  animation-duration: 1.5s;
}

a.button, a.button-link {
    padding: 18px 24px;
    display: table;
    border-radius: 4px;
    color: #fff;
    background-color: #034ea2;
    font-size: 2em;
    line-height: 1.4;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.2s linear, text-decoration 0.2s linear;
}


</style>