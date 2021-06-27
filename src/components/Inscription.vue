<template>
    <div class="container">
        <h1 class="header-title">Inscription</h1>
        
        <div class="layout">

       
            <div class="form-container">
                <h3 class="heading-3">Les champs marqués d'un <span>*</span> sont obligatoires</h3>
                <form action="">
                    <div>
                        <label for="nom"><span>*</span> Nom </label>
                        <input type="text" name="nom" id="nom">
                    </div>
                    <div>
                        <label for="prenom"><span>*</span> Prénom </label>
                        <input type="text" name="prenom" id="prenom">
                    </div>
                    <div>
                        <label for="numTel"><span>*</span> Numéro de téléphone </label>
                        <input type="text" name="numTel" id="numTel">
                    </div>
                    <div>
                        <label for="email"><span>*</span> Adresse électronique (exmple: nom@exemple.fr)</label>
                        <input type="email" name="email" id="email" autocomplete="email" required>
                    </div>
                    <div>
                        <label for="nom"><span>*</span> Mot de passe <br>(8 caractères,1 Majuscule, 1 chiffre et 1 caractère spécial) </label>
                        <input type="password" name="password" id="password" autocomplete="new-password" required>
                    </div>
                    <div>
                        <label for="confirmPassword"><span>*</span> Confirmer votre Mot de passe </label>
                        <input type="password" name="confirmPassword" id="confirmPassword" autocomplete="new-password" required>
                    </div>
                
                </form>
            </div>

            <div class="upload-container">
                    <h2>Veuillez charger votre carte d'identité et votre carte électorale :</h2>
                    <p><span>*</span> Afin de garantir la validité de votre identité vous allez devoir nous envoyer une photo selfie avec votre carte d'identité.</p>
                <label for="file" class="label-pj"><span>*</span> Pièces jointes(.jpeg,.png,.pdf)</label>
                <input type="file" name="file" id="file" ref="myFiles" @change="previewFiles" multiple accept=".jpg, .jpeg, .png , .pdf"  >

                <h2>Vos fichiers chargés :</h2>

                <div class="list-file" v-if="showList">
                    <ul v-for="file in files" :file="file" :key="file.id"  >
                        <li class="file-item">{{file.name}} <img src="../images/oeil.png" alt="" class="oeil" @click="readFile(file)"> <span class="cross" @click="deleteFile(file)" >&Cross;</span></li>
                    </ul>
                    <img id="output">
                </div>
                
            </div>
        </div>

        <div class="captcha">
            <div class="block">
                <h3>Etes-vous un robot?</h3>
                <p>
Veuillez cocher la case afin de prouver que vous n’êtes pas un robot. Si vous ne la voyez pas, vous pouvez nous écrire afin d'obtenir de l’aide.</p>
            </div>
            
            <div class="g-recaptcha center" data-sitekey="6LfhPU0bAAAAABIL4nMlTL5KSXbN41dYbRvsTHlB"></div>

            <button type="submit">S'inscrire</button>
        </div>

    </div>
    
</template>

<script>
module.exports = {
    name:'Inscription',
    data() {
        return {
            files: [],
            showList: false,
        }
    },
    methods: {
        previewFiles(event) {
            console.log(event.target.files);
            this.files = event.target.files;
            this.showList = true;
        },
        readFile(file){
            console.log(file)
            const output = document.getElementById('output');
            output.src = '';
            const reader = new FileReader();
            reader.addEventListener('load',(e) => {
                output.src = e.target.result;
            })
            reader.readAsDataURL(file);
        },
        deleteFile(file){
         
            console.log(this.files)
            console.log(Object.values(this.files)[0].name)

            console.log("length " + this.files.length)

            let fileArray = [];
            for(var i = 0; i < this.files.length; i++){
                fileArray.push(Object.values(this.files)[i].name);
            }

            console.log(fileArray);

            const index = fileArray.findIndex(fileName => fileName === file.name);
            console.log(index)

            const dt = new DataTransfer()
            const input = document.getElementById('file')
            const { files } = input
            for (let i = 0; i < files.length; i++) {
                const file = files[i]
                if (index !== i) dt.items.add(file) // here you exclude the file. thus removing it.
                input.files = dt.files
                this.files = dt.files
            }            
        }

    }
}
</script>

<style scoped>

.container{
    margin-top: 20px;
    margin-bottom: 20px;

}

.header-title{
    width: 280px;
    margin-left: 235px;
    text-transform: uppercase;
    letter-spacing: .35rem;
    line-height: 2.5;
    display: inline-block;
    color: #0B6BA8;
    border-bottom: 4px solid #0B6BA8;
    
}

.heading-3{
    font-weight: 400;
    margin: 20px 50px 20px 20px;
   
}

h2{
   margin: 20px 0px;
}


label{
    font-size: 16px;
    color: #0B6BA8;  
    display: block;
    font-weight: 600;
  
}

.label-pj{
    margin: 20px 0px;
}

span{
    color: red;
}

.form-container{
    display: flex;
    flex-flow: column wrap;
    width: 500px;
    margin-left: 250px;
    align-items: center;

}

.form-container div {
    margin-bottom: 10px;
}
input[type="text"],
input[type="email"],
input[type="password"] {


	color: #0d0d0d;
	padding: 8px 16px;
	text-align: start;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 10px;
	width: 85%;

	
}

.block{
    color: #0B6BA8;
    display: block;
    width: 400px;

    margin: 40px;
}

.block h3{
    margin-bottom: 20px;
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

input[type="file"]{
    width: 100%;
}


input[type="file"]::-webkit-file-upload-button{
    
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
	margin: 5px 20px 5px 20px;
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}


.layout{
    display: flex;
    justify-content: space-between;
}

.upload-container{
    margin-right: 250px;
    width: 500px;
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

.oeil{
    width: 20px;
    display: inline-block;
    cursor: pointer;
   
}

.captcha{
    margin-top: 100px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}

#output{
    width: 400px;
    object-fit: cover;
}

.cross{
    font-size: 16px;
    cursor:pointer;
    display: block;
}

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
	margin: 20px 20px 20px 20px;
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

</style>