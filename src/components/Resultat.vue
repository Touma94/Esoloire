<template>
  <div class="container">
    <h1 class="header-title">Election en cours</h1>
      <div class="thumbnail">
        <img src="../images/election.png" alt="election en cours">
      </div>
            
    <h1 class="header-title">Résultat en cours</h1>

    <div class="chart">
        <bar-chart/>
    </div>
  </div>
</template>

<script>
const BarChart = httpVueLoader('../components/BarChart.vue');

module.exports= {
    name:'Resultat',
    components:{
      BarChart,
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

</style>