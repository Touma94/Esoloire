<template>
  <div class="container">
    <h1 class="header-title">Election en cours</h1>
      <div class="thumbnail">
        <img src="../images/election.png" alt="election en cours">
      </div>
            
    <h1 class="header-title">Résultat en cours</h1>

    <div class="chart">
        
    </div>

    <h1 class="header-title">Candidats</h1>
    
    <div class="candidats">
      <div class="cards">
        <div v-for="candidat in candidats" :candidat="candidat" :key="candidat.id"> 
          <Card :candidat="candidat" class="card-spacing"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
const BarChart = httpVueLoader('../components/BarChart.vue');
const Card = httpVueLoader('../components/Card.vue');

module.exports= {
    name:'Resultat',
    components:{
      BarChart,
      Card
    },
    data(){
      return{
        candidats:[{
          id:0,
          urlImg:"https://www.footamateur.fr/wp-content/uploads/2021/03/Emmanuel-Macron.jpg",
          name:"Emmanuel Macron",
          parti:"LREM",
          link:"https://en-marche.fr/emmanuel-macron"
        },
        {
          id:1,
          urlImg:"https://www.footamateur.fr/wp-content/uploads/2021/03/Emmanuel-Macron.jpg",
          name:"Emmanuel Macron",
          parti:"LREM",
          link:"https://en-marche.fr/emmanuel-macron"
        },{
          id:2,
          urlImg:"https://www.footamateur.fr/wp-content/uploads/2021/03/Emmanuel-Macron.jpg",
          name:"Emmanuel Macron",
          parti:"LREM",
          link:"https://en-marche.fr/emmanuel-macron"
        },{
          id:3,
          urlImg:"https://www.footamateur.fr/wp-content/uploads/2021/03/Emmanuel-Macron.jpg",
          name:"Emmanuel Macron",
          parti:"LREM",
          link:"https://en-marche.fr/emmanuel-macron"
        },{
          id:4,
          urlImg:"https://www.footamateur.fr/wp-content/uploads/2021/03/Emmanuel-Macron.jpg",
          name:"Emmanuel Macron",
          parti:"LREM",
          link:"https://en-marche.fr/emmanuel-macron"
        },{
          id:5,
          urlImg:"https://www.footamateur.fr/wp-content/uploads/2021/03/Emmanuel-Macron.jpg",
          name:"Emmanuel Macron",
          parti:"LREM",
          link:"https://en-marche.fr/emmanuel-macron"
        },
        
        ],
      }
}
}
</script>

<style scoped>
.header-title{
  width: 450px;
    margin-left: 235px;
    text-transform: uppercase;
    letter-spacing: .35rem;
    line-height: 2.5;
    display: block;
    color: #0B6BA8;
    border-bottom: 4px solid #0B6BA8;
    
}

.thumbnail{
  display: flex;
  justify-content: center;
}

.thumbnail img{
  width: 1200px;

  margin: 40px;
}

.cards{
  padding: 100px 230px;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
}
.card-spacing{
  margin: 50px;
}

</style>