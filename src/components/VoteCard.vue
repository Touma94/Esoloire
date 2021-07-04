<template>
	<div class="card">
		<img :src="candidat.imgUrl" :alt="candidat.name" class="img-card">
		<div class="card-content">
			<h1 class="candidat">{{candidat.name}}</h1>
			<h1 class="partipolitique">{{candidat.parti}}</h1>

			<div class="card-btn">
				<button class="btn-vote" type="submit">Voter</button>
			</div>
		</div>
		
		
		

	</div>
</template>

<script>
module.exports = {
	name: "VoteCard",
	props:{
		candidat:{ Object, default: []}
	}
};
</script>

<style scoped>
.card{
	margin-top: 50px;
	display: flex;
	height: 250px;
	box-shadow: 2px 2px 10px rgba(0,0,0, 0.4);
	border-radius: 30px;
	background-color: white;
}

.img-card{
	width: 38%;
	object-fit: cover;
	border-radius: 30px 0px 0px 30px;
	box-shadow: 2px 2px 10px rgba(0,0,0, 0.4);
}

.card-content{
	padding: 35px;
	
}


.btn-vote{
	background: #b92b27;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #1565C0, #b92b27);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #1565C0, #b92b27); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	border: none;
	color: white;
	padding: 15px 80px;
	text-align: center;
	text-decoration: none;
	
	text-transform: uppercase;
	font-size: 13px;
	font-weight: bold;
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

.candidat{
	color: #26246C;
	text-transform: uppercase;
}

.partipolitique{
	color: #01579B;
	font-weight: 400;
}

</style>
