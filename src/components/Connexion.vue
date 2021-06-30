<template>
    <div class="container">
        <h1 class="header-title">Connexion</h1>
        
            <div class="wrapper fadeInDown">
                <form id="formContent" @submit.prevent="connexion()">
                    <div class="fadeIn first">
                        <div>
                            <img src="../images/logo.png" alt="e-soloir logo" class="form-logo">
                            <div>
                                <label for="email" class="label-email"><span>*</span> Adresse électronique (exemple : nom@exemple.fr)</label>
                            <input
                                type="email"
                                id="email"
                                class="fadeIn second"
                                name="email"
                                placeholder="email"
								v-model="email"
								required
                            />
                            </div>
                            
                            <div>
                                <label for="email" class="label-password"><span>*</span> Mot de passe</label>
                           
                            <input
                                type="password"
                                id="password"
                                class="fadeIn third"
                                name="mdp"
                                placeholder="mot de passe"
								v-model="password"
								required
                            />
                             </div>
                            <div class="g-recaptcha center" data-sitekey="6LfhPU0bAAAAABIL4nMlTL5KSXbN41dYbRvsTHlB"></div>

                            <button
                                type="submit"
                                class="fadeIn fourth"
                                value="Se connecter"          
                                >Se connecter</button>
                        </div>

                        <div id="formFooter" >
                            &copy;E-soloir
                        </div>
                </form>
            </div>
    </div>
    
</template>

<script>
module.exports = {
    name:'Connexion',
	data(){
		return{
			email: "",
			password:"",
		}
	},
	methods:{
		async connexion(){
	const res = await axios.post("http://localhost:5000/login",{
				email: this.email,
				password: this.password
	});
	console.log(res.data);
	this.$router.push("/voter");
		
		
		}
	}

}
</script>
<style scoped>

.container{
    margin-top: 15px;
    padding: 20px;
    background: #005C97;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #363795, #005C97);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #363795, #005C97); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.header-title{
    text-transform: uppercase;
    letter-spacing: .35rem;
    margin-left: 205px;
    color: white;
    line-height: 2.5;
    border-bottom: 3px solid white;
    display: inline-block;
    width: 250px;
}

.form-container{
    background-color: #f7f7f7;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
}

label{
    font-size: 15px;
    color: #0B6BA8;
    font-weight: 600;
   
}



.label-password{
    padding-right: 280px;
}
span{
    color: red;
}

.center{
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 10px 0px;
}

/* STRUCTURE */

.form-logo{
    width: 150px;
    margin: 10px;
}

.wrapper {
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	min-height: 100%;
    padding: 20px;
    
}

#formContent {
	-webkit-border-radius: 10px 10px 10px 10px;
	border-radius: 10px 10px 10px 10px;
    background: #fff;
	padding: 35px;
	width: 90%;
	max-width: 500px;
	position: relative;
	padding: 0px;
	-webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
	box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
	text-align: center;

}

#formFooter {
	background-color: #f6f6f6;
	border-top: 1px solid #dce8f1;
	padding: 25px;
	text-align: center;
	-webkit-border-radius: 0 0 10px 10px;
	border-radius: 0 0 10px 10px;
    margin-top: 20px;
}

/* TABS */

h2.inactive {
	color: #cccccc;
}

h2.active {
	color: #0d0d0d;
	border-bottom: 2px solid #5fbae9;
}

/* FORM TYPOGRAPHY*/

button {
	background-color: #0B6BA8;
	border: none;
	color: white;
	padding: 15px 80px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	text-transform: uppercase;
	font-size: 13px;
	-webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
	box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
	-webkit-border-radius: 5px 5px 5px 5px;
	border-radius: 5px 5px 5px 5px;
	margin: 5px 20px 5px 20px;
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}

button:hover {
	background-color: #39ace7;
}

button:active {
	-moz-transform: scale(0.95);
	-webkit-transform: scale(0.95);
	-o-transform: scale(0.95);
	-ms-transform: scale(0.95);
	transform: scale(0.95);
}

input[type="email"],
input[type="password"] {
	background-color: #f6f6f6;
	border: none;
	color: #0d0d0d;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 10px;
	width: 85%;
	border: 2px solid #f6f6f6;
	-webkit-transition: all 0.5s ease-in-out;
	-moz-transition: all 0.5s ease-in-out;
	-ms-transition: all 0.5s ease-in-out;
	-o-transition: all 0.5s ease-in-out;
	transition: all 0.5s ease-in-out;
	-webkit-border-radius: 30px;
	border-radius: 30px;
}

input[type="email"]:focus {
	background-color: #fff;
	border-bottom: 2px solid #5fbae9;
}

input[type="email"]:placeholder {
	color: #cccccc;
}
input[type="password"]:focus {
	background-color: #fff;
	border-bottom: 2px solid #5fbae9;
}

input[type="password"]:placeholder {
	color: #cccccc;
}

/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
	-webkit-animation-name: fadeInDown;
	animation-name: fadeInDown;
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(0, -100%, 0);
		transform: translate3d(0, -100%, 0);
	}
	100% {
		opacity: 1;
		-webkit-transform: none;
		transform: none;
	}
}

@keyframes fadeInDown {
	0% {
		opacity: 0;
		-webkit-transform: translate3d(0, -100%, 0);
		transform: translate3d(0, -100%, 0);
	}
	100% {
		opacity: 1;
		-webkit-transform: none;
		transform: none;
	}
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
@-moz-keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.fadeIn {
	opacity: 0;
	-webkit-animation: fadeIn ease-in 1;
	-moz-animation: fadeIn ease-in 1;
	animation: fadeIn ease-in 1;

	-webkit-animation-fill-mode: forwards;
	-moz-animation-fill-mode: forwards;
	animation-fill-mode: forwards;

	-webkit-animation-duration: 1s;
	-moz-animation-duration: 1s;
	animation-duration: 1s;
}

.fadeIn.first {
	-webkit-animation-delay: 0.4s;
	-moz-animation-delay: 0.4s;
	animation-delay: 0.4s;
}

.fadeIn.second {
	-webkit-animation-delay: 0.6s;
	-moz-animation-delay: 0.6s;
	animation-delay: 0.6s;
}

.fadeIn.third {
	-webkit-animation-delay: 0.8s;
	-moz-animation-delay: 0.8s;
	animation-delay: 0.8s;
}

.fadeIn.fourth {
	-webkit-animation-delay: 1s;
	-moz-animation-delay: 1s;
	animation-delay: 1s;
}

/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
	display: block;
	left: 0;
	bottom: -10px;
	width: 0;
	height: 2px;
	background-color: #56baed;
	content: "";
	transition: width 0.5s;
}

.underlineHover:hover {
	color: #0d0d0d;
}

.underlineHover:hover:after {
	width: 100%;
}

/* OTHERS */

*:focus {
	outline: none;
}



</style>