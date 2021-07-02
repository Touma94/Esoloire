<template>
    <div>
    <div class="container">
        <h1>E-soloir est une plateforme sécurisée pour effectuer votre <strong>vote électorale</strong></h1>
        <p> <strong> E-soloir</strong>, c'est la solution proposée par l’État pour sécuriser et simplifier le vote électoral en ligne.</p>
        <div class="icon-container">
            <div>
                <img src="./images/fusee.png" alt="fusée" class="icon">
                <p>Gagnez du temps</p>
            </div>
            <div>
                <img src="./images/bouclier.png" alt="fusée" class="icon">
                <p>Sécurisez vos informations</p>
            </div>
            <div>
                <img src="./images/compte.png" alt="fusée" class="icon">
                <p>Consulter les résultats</p>
            </div>
        </div>
        <div class="video-container">
            <iframe width="1000" height="500" src="https://www.youtube.com/embed/gEatS_HOWnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <section id="comment-ca-marche">
            <div class="steps-container">
            <h2>Comment ça marche&nbsp;?</h2>

            <div class="step">
            <div class="step-container">
                <div class="step-info">
                <h5 class="gradient">1</h5>
                <p>
                   Pour créer un compte utilisateur, vous allez devoir saisir vos informations et <br> 
                  <strong>fournir les pièces nécessaires(carte d'identité, carte électorale, selfie avec les cartes)</strong>
                </p>
                </div>
                <div class="image">
                <img src="../images/account.png" data-lz-src="/images/img-bouton@2x.png" alt="Clic sur le bouton S'identifier avec FranceConnect" title="Clic sur le bouton S'identifier avec FranceConnect">
                </div>
            </div>
            </div>

            <div class="step">
            <div class="step-container">
                <div class="step-info">
                <h5 class="gradient">2</h5>
                <p>
                   Nous allons ensuite proccéder à la vérification de vos pièces d'identité et vos informations saisies lors de l'inscription <strong>pour valider votre compte utilisateur</strong>
                </p>
              
                </div>
                <div class="image">
                <img src="../images/approve.png" data-lz-src="/images/img-fi@2x.png" alt="Choix d'un compte - de multiples services sont disponibles via FranceConnect" title="Choix d'un compte - de multiples services sont disponibles via FranceConnect">
                </div>
            </div>
            
            </div>

            <div class="step">
            <div class="step-container">
                <div class="step-info">
                <h5 class="gradient">3</h5>
                <p>
                    Une fois votre compte valider vous pourrez <strong>vous connecter et voter !</strong>
                </p>
                </div>
                <div class="image">
                <img src="../images/voting-box.png" data-lz-src="/images/img-champs@2x.png" alt="Espace de connexion - saisie d'identifiants" title="Espace de connexion - saisie d'identifiants">
                </div>
            </div>
            </div>

            <div class="step">
            <div class="step-container">
                <div class="step-info">
                <h5 class="gradient">4</h5>
                <p>
                    <strong>Consulter les résultats de l'élection en direct!</strong>
                </p>
                <p class="info-complement desktop">
                    Il ne vous reste plus qu’à cliquer pour accéder à votre espace et poursuivre votre démarche.
                </p>
                </div>
                    <div class="image">
                        <img src="../images/stats.png" data-lz-src="/images/img-connecte@2x.png" alt="Clic sur le bouton &quot;J'accède à mon service&quot;" title="Clic sur le bouton &quot;J'accède à mon service&quot;">
                    </div>
                </div>
            
        </section>

         </div>
            <section id="aide"  class="fullwidth-section">
                <div class="aide-container">
                    <h2>Besoin d’aide ?</h2>
                    <router-link to="/aide" class="button">Consultez notre FAQ</router-link>
                </div>
            </section>

        <section id="services" class="fullwidth-section">
        <div class="section-outter">
            <div class="section-inner">
                <h2>Commencer à voter</h2>
                <div class="flex">
                    <router-link to="/connexion" class="button">Se connecter</router-link>
                    <router-link to="/inscription" class="button">S'inscrire</router-link>
                </div>
            
            </div>
        </div>
        </section>

  
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



.icon-container{
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.icon-container p{
    text-align: center;
    width: 200px;
    color: #3E4553;
    font-weight: bold;
    font-size: 20px;
}

.icon{
    width: 200px;
}

.video-container{
    margin-top: 80px;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}

.button-container{
    margin-right: 60%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

h1{
    font-size: 45px;
    color: #3E4553;
    font-weight: bolder;
}

h2 {
    color: #034ea2;
    font-size: 3.2em;
    line-height: 1.05;
    font-weight: 800;
    margin-bottom: 48px;
}

p{
    font-size: 18px;
    margin-top: 10px;
}



#comment-ca-marche .step .step-info {
    display: flex;
    margin-bottom: 16px;
}

.gradient{
    font-size: 64px;
    line-height: 1;
    font-weight: 800;
    color: #034EA2;
    
}

#comment-ca-marche .step img {
    width: 65%;
    margin: 0 auto;
    display: block;
    margin-bottom: 16px;
}


section.fullwidth-section {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    background-color: #E5EDF5;
    padding: 50px 230px;
}

.flex{
    display: flex;
}

.flex a{
    margin-right: 50px;
}

a.button, a.button-link, a:visited {
    padding: 18px 24px;
    display: table;
    border-radius: 4px;
    color: #fff !important;
    background-color: #034ea2;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.2s linear, text-decoration 0.2s linear;
}

a.button:hover{
    background-color:#159bda ;
}

a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}

@media (min-width: 992px){
    #comment-ca-marche .step .step-container .step-info {
    width: 54%;
    }

    #comment-ca-marche .step .step-container .step-info p {
    font-size: 20px;
    margin-bottom: 16px;
}
}

@media (min-width: 768px){
    #comment-ca-marche .step:nth-child(2n) .step-container {
        flex-direction: row-reverse;
    }

    #comment-ca-marche .step .step-container {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
    }

    #comment-ca-marche .step{
        margin-bottom: 32px;
    }

    #comment-ca-marche .step .step-container .step-info {
        width: 50%;
        flex-direction: column;
        flex-shrink: 0;
    }
 

    #comment-ca-marche .step .step-container .step-info p {
    font-size: 22px;
}
}

</style>