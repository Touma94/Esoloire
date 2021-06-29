<template>
  <div class="container">
      <h1 class="header-title">
          Administration
      </h1>

        <div class="verify-card">
            <h3 class="card-title">Vérifications Pièces d'identité</h3>
            <h5>Username</h5>    
            <h5>Fichiers envoyés : </h5>   
            <ul class="list-file">
                <li class="file-item">FILENAME <img src="../images/oeil.png" alt="" class="oeil"></li>
                <li class="file-item">FILENAME <img src="../images/oeil.png" alt="" class="oeil"></li>
                <li class="file-item">FILENAME <img src="../images/oeil.png" alt="" class="oeil"></li>
            </ul>
            
        <div class="btn-container">
            <button class="btn-blue">Valider le compte</button>
            <button class="btn-red">Refuser le compte</button>
        </div>
            
        </div>       



  </div>
</template>

<script>


module.exports = {
    name: 'Admin',
    
    
}
</script>

<style scoped>
.container{
    padding: 30px 230px;
    background: #005C97;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #363795, #005C97);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #363795, #005C97); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    
}

.header-title{
    width: 380px;
    text-transform: uppercase;
    letter-spacing: .35rem;
    line-height: 2.5;
    
    color: white;
    border-bottom: 4px solid white;
    
}

.verify-card{
    margin-top: 50px;
    background: white;
    width: 800px;
    box-shadow: 2px 2px 10px rgba(0,0,0, 0.4);
    height: 450px;
    border-radius: 30px;
    padding: 30px 150px;
}

.card-title{
    text-transform: uppercase;
    letter-spacing: .15rem;
    line-height: 2.5;
    font-size:22px;
    color: #005C97;
    border-bottom: 4px solid #005C97;
}

h5{
    margin: 20px;
    font-size: 16px;
}

.oeil{
    width: 20px;
    display: inline-block;
    cursor: pointer;
   
}

.list-file{
    padding:5px;
}

.file-item{
    display: flex;
    justify-content: space-evenly;
    font-size: 16px;
    font-weight: 600;
    margin: 10px 0;
}
.btn-container{
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.btn-blue{
    background-color: #0B6BA8;
	border: none;
	color: white;
	padding: 15px 30px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	text-transform: uppercase;
	font-size: 13px;
	-webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
	box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
	-webkit-border-radius: 5px 5px 5px 5px;
	border-radius: 5px 5px 5px 5px;
	margin: 20px 20px 20px 20px;
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
    cursor: pointer;
}
.btn-red{
    background-color: #ED1F1F;
	border: none;
	color: white;
	padding: 15px 30px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	text-transform: uppercase;
	font-size: 13px;
	-webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
	box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
	-webkit-border-radius: 5px 5px 5px 5px;
	border-radius: 5px 5px 5px 5px;
	margin: 20px 20px 20px 20px;
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
    cursor: pointer;
}


</style>