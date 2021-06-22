<template>
    <div class="container">
       Home
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