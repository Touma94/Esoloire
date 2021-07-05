<template>
<div class="container">

    <div class="jumbotron">
       <h1>Foire Aux Questions</h1> <br>
       <h4>Les réponses à vos questions</h4>
    </div>

    <h3 class="header-title"> <u> Comment utiliser la plateforme e-soloir </u></h3>
    <div class="question-box" v-for="question in questions" :key="question.id">
    <h3 @click= "question.open =!question.open"> {{question.title}} 	</h3> 
    <div class="question-reply" v-show="question.open"> <p>{{question.reply}}</p>
    </div>
</div>
<div class="container">
    <h3 class="header-title"> <u> E-soloir et la blockchain </u></h3>
    <div class="question-box" v-for="question in questions_chain" :key="question.id">
    <h3 @click= "question.open =!question.open"> {{question.title}}</h3> <div class="question-reply" v-show="question.open"> <p>{{question.reply}}</p>
    </div>
</div>
<div class="container">
    <h3 class="header-title"> <u> Information sur l'election </u></h3>
    <div class="question-box" v-for="question in questions_other" :key="question.id">
    <h3 @click= "question.open =!question.open"> {{question.title}}</h3> <div class="question-reply" v-show="question.open"> <p>{{question.reply}}</p>
    </div>
</div>
<div class="container">
    <h3 class="header-title"> <u> Autres questions </u></h3>
    <div class="question-box" v-for="question in questions_other" :key="question.id">
    <h3 @click= "question.open =!question.open"> {{question.title}}</h3> <div class="question-reply" v-show="question.open"> <p>{{question.reply}}</p>
    </div>
</div>

</template>

<script>
module.exports = {
    name:'Aide',
    data() {
        return{
          questions : {

            "Question One": {
              "open": false,
              "title": "Pourquoi mon compte doit-il être vérifié?",
              "reply": "Une fois que vous avez envoyé vos informations et votre carte d'identité, un administrateur doit les vérifier afin d'éviter les faux comptes qui pourraient remettre en question l'élection. "
            },
            "Question Three": {
              "open": false,
              "title": "Comment utiliser e-soloir?",
              "reply": "E-soloir est une plateforme sécurisée pour effectuer votre vote électoral. Pour utiliser e-soloir, commencez par créer votre compte en envoyant les informations nécessaires. Une fois validé par un compte administrateur, vous pouvez passer au vote. "
            },
            "Question Five": {
              "open": false,
              "title": "Je reçois un mail mais mon compte ne semble pas utilisable.",
              "reply": "Une fois le compte créer, un administrateur doit le valider pour rendre possible le vote dudit citoyen."
            },
            "Question Six": {
              "open": false,
              "title": "Pourquoi est-ce que je ne reçois pas de mails de confirmation après la création de mon compte?",
              "reply": "Si vous ne recevez pas de mails de confirmation après la création de votre compte, votre adresse mail est sans doute éronnée."
            }
          },
          questions_chain : {
            "Question Two": {
              "open": false,
              "title": "Pourquoi voter au travers de la blockchain?",
              "reply": "La technologie de la blockchain est décentralisé, permettant une sécurité accrue comparé aux autres services en ligne."
            }, 
            "Question Four": {
              "open": false,
              "title": "Comment faire si je ne maîtrise pas les outils du numérique?",
              "reply": "Les personnes ne maîtrisant pas les outils numériques ou n’y ayant pas accès peuvent toujours voter au bureau de vote physique en y allant soit-même ou au travers d'une dérogation.."
            }
          }, 
          questions_elec : {
            "Question Huit": {
              "open": false,
              "title": "Où trouver les inormations générales sur l'éléction en cours?",
              "reply": "Vous trouverez dans la section résultat l'éléction en cours, les candidats en lice et un graphique interactif du nombre de vote obtenu par chacun d'entre-eux."
            }
          }, 
          questions_other : {
            "Question Sept": {
              "open": false,
              "title": "Je ne trouve pas la réponse à mon problème.",
              "reply": "Si vous ne trouvez pas la réponse à votre problème, veuillez-nous contacter par mail à l'adresse suivante: e-soloir@hotmail.com."
            }
          }
        }
    }

    }
</script>

<style scoped>

.container {
   background: #E0EAFC;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #CFDEF3, #E0EAFC);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #CFDEF3, #E0EAFC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    padding-bottom: 50px;
}

.jumbotron{
    height: 250px;
    color: white;
  
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    text-align: center;
    background: #005c97; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #363795,
        #005c97
    ); /* Chrome 10-25, Safari 5.1-6 */
     background: linear-gradient(
        to right,
        #363795,
        #005c97
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.jumbotron h1{
    font-size: 42px;
}

.jumbotron h4{
    font-weight: 400;
}

.question-box{
    width: 75%;
    display: flex;
    flex-flow: column;
    margin-left: 13%;
    box-shadow: 2px 2px 10px rgba(0,0,0, 0.4);
    border-radius: 5px;
}

.container .question-box:not(:last-child) {
  border-bottom: 2px solid #EEE;
}
.container .question-box h3 {
  margin: 0;
  padding: 15px;
  background-color: #f7f7F7;
  border-radius: 5px;
}
.container .question-box h3:hover {
  cursor: pointer;
}
.container .question-box .question-reply {
  background-color: #FBF6F0;
  padding: 15px;
}
.container .question-box .question-reply p {
  margin: 0;
}
.links-urls {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
}
.links-urls .link {
  padding: 10px 20px;
  display: block;
  background-color: #EEE;
  margin-bottom: 10px;
  text-decoration: none;
  color: #777;
}
.header-title{
    margin: 50px 0px;
    
    margin-left: 235px;
    text-transform: uppercase;
    letter-spacing: .25rem;
    line-height: 2.5;
    color: #0B6BA8;
    font-size: 28px;
  
}
</style>