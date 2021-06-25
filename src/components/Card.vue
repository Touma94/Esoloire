<template>
  <div class="card-container">
      <img :src="`${candidat.urlImg}`" :alt="`${candidat.name}`" class="card-img">
      <div class="card-txt">
        <h1 class="name">{{candidat.name}}</h1>
        <h3 class="parti">{{candidat.parti}}</h3>    
        <p class="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
      </div>
      <div class="card-btn">
        <a :href="`${candidat.link}`" target="_blank" class="btn">En savoir plus</a>
      </div>
      
  </div>
</template>

<script>
module.exports = {
    name:'Card',
    props: {
        candidat:{type: Object, default: []}
    },
  
}
</script>

<style>
.card-container{
    width: 300px;
    box-shadow: 2px 2px 10px rgba(0,0,0, 0.4);
    height: 550px;
    border-radius: 30px;
}

.card-img{
    width: 300px;
    border-radius: 30px 30px 0px 0px;
}

.name{
    font-size: 18px;
    color: #26246C;
}

.parti{
    text-transform: uppercase;
    color: #01579B;
}

.card-txt{
    padding: 15px 30px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    height: 215px;
}

.description{
    font-size: 14px;
}

.card-btn{
    display: block;
    position: relative;
    
}

.btn{
    padding: 8px 16px;
    color: white !important;
    border-radius: 5px;
    font-size: 14px;
    background: #b92b27;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #1565C0, #b92b27);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #1565C0, #b92b27); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    position: absolute;
    top: 10px;
    right: 25px;
    font-weight: bold;
}
</style>