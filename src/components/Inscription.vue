<template>
  <div class="container">
    <h1 class="header-title">Inscription</h1>

    <div class="layout">
      <div class="form-container">
        <div class="alert success" id="alert-success">
          <span class="closebtn">×</span>
          <strong>Succès!</strong> Votre compte est soumis à la vérification des
          données afin que vous participez aux prochaines élections. Surveillez
          vos mails!
        </div>
        <h3 class="heading-3">
          Les champs marqués d'un <span>*</span> sont obligatoires
        </h3>
      <validation-observer >
        <form @submit.prevent="createUser()" enctype="multipart/form-data">
          <div>
            <label for="last_name"><span>*</span> Nom </label>
            <validation-provider rules="required|alpha" v-slot="{ errors }">
              <input
                type="text"
                name="Nom"
                id="last_name"
                v-model="last_name"
              />
              <div class="invalid-feedback d-inline-block" v-show="errors">{{ errors[0] }}</div>
            </validation-provider>
          </div>
          <div>
            <label for="first_name"><span>*</span> Prénom </label>
            <validation-provider rules="required|alpha" v-slot="{ errors }">
              <input
                type="text"
                name="Prenom"
                id="first_name"
                v-model="first_name"
              />
              <div class="invalid-feedback d-inline-block" v-show="errors">{{ errors[0] }}</div>
            </validation-provider> 
          </div>
          <div>
            <label for="phone"><span>*</span> Numéro de téléphone </label>
            <validation-provider rules="required|digits:10" v-slot="{ errors }">
              <input type="text" name="phone" id="phone" v-model="phone" />
              <div class="invalid-feedback d-inline-block" v-show="errors">{{ errors[0] }}</div>
            </validation-provider>
          </div>

          <div>
            <label for="email"
              ><span>*</span> Adresse électronique (exemple:nom@exemple.fr)
            </label>
            <validation-provider rules="required|email" v-slot="{ errors }">
              <input
                type="email"
                name="email"
                id="email"
                v-model="email"
                autocomplete="email"
                required
              />
              <div class="invalid-feedback d-inline-block" v-show="errors">{{ errors[0] }}</div>
            </validation-provider>
          </div>
          <div>
            <label for="password"><span>*</span> Mot de passe <br />(8 caractères,1 Majuscule, 1
              chiffre et 1 caractère spécial)
            </label>
            <validation-provider rules="required|min:8" vid="password" v-slot="{ errors }">
              <input
                type="password"
                name="password"
                id="password"
                v-model="password"
                autocomplete="new-password"
                required
              />
              <div class="invalid-feedback d-inline-block" v-show="errors">{{ errors[0] }}</div>
            </validation-provider> 
          </div>
          <div>
            <label for="confirmPassword"
              ><span>*</span> Confirmer votre Mot de passe
            </label>
            <validation-provider rules="required|confirmed:password" v-slot="{ errors }">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                autocomplete="new-password"
                required
              />
              <div class="invalid-feedback d-inline-block" v-show="errors">{{ errors[0] }}</div>
            </validation-provider> 
          </div>

          <div class="upload-container">
            <h2>
              Veuillez charger votre carte d'identité et votre carte électorale
              :
            </h2>
            <p>
              <span>*</span> Afin de garantir la validité de votre identité vous
              allez devoir nous envoyer une photo selfie avec votre carte
              d'identité.
            </p>

            <label for="file" class="label-pj"
              ><span>*</span> Pièces jointes(.jpeg,.png,.pdf)</label
            >
         
            <input
              type="file"
              name="file"
              id="file"
              ref="myFiles"
              @change="previewFiles"
              multiple
              accept=".jpg, .jpeg, .png , .pdf"
              required
            />

            <h2>Vos fichiers chargés :</h2>

            <div class="list-file" v-if="showList">
              <ul v-for="file in files" :file="file" :key="file.id">
                <li class="file-item">
                  {{ file.name }}
                  <img
                    src="../images/oeil.png"
                    alt=""
                    class="oeil"
                    @click="readFile(file)"
                  />
                  <span class="cross" @click="deleteFile(file)">&Cross;</span>
                </li>
              </ul>
              <img id="output" />
            </div>
          </div>

          <div class="captcha">
            <div class="block">
              <h3>Etes-vous un robot?</h3>
              <p>
                Veuillez cocher la case afin de prouver que vous n’êtes pas un
                robot. Si vous ne la voyez pas, vous pouvez nous écrire afin
                d'obtenir de l’aide.
              </p>
            </div>

            <div
              class="g-recaptcha center"
              data-sitekey="6LfhPU0bAAAAABIL4nMlTL5KSXbN41dYbRvsTHlB"
            ></div>

            <button type="submit">S'inscrire</button>
          </div>
        </form>
      </validation-observer>
      </div>
    </div>
  </div>
</template>

  


<script>
module.exports = {
  name: "Inscription",
  data() {
    return {
      files: [],
      showList: false,
      last_name: "",
      first_name: "",
      phone: "",
      email: "",
      password: "",
    };
  },
  watch:{
    last_name(value){
      this.last_name = value;
    }
  },
  methods: {
    previewFiles(event) {
      console.log(event.target.files);
      this.files = event.target.files;
      this.showList = true;
    },
    readFile(file) {
      console.log(file);
      const output = document.getElementById("output");
      output.src = "";
      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        output.src = e.target.result;
      });
      reader.readAsDataURL(file);
    },
    deleteFile(file) {
      console.log(this.files);
      console.log(Object.values(this.files)[0].name);

      console.log("length " + this.files.length);

      let fileArray = [];
      for (var i = 0; i < this.files.length; i++) {
        fileArray.push(Object.values(this.files)[i].name);
      }

      console.log(fileArray);

      const index = fileArray.findIndex((fileName) => fileName === file.name);
      console.log(index);

      const dt = new DataTransfer();
      const input = document.getElementById("file");
      const { files } = input;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (index !== i) dt.items.add(file); // here you exclude the file. thus removing it.
        input.files = dt.files;
        this.files = dt.files;
      }
    },
    async createUser() {
      const files = document.getElementById("file");
      const formData = new FormData();
      formData.append("last_name", this.last_name);
      formData.append("first_name", this.first_name);
      formData.append("phone", this.phone);
      formData.append("email", this.email);
      formData.append("password", this.password);

      for (let i = 0; i < files.files.length; i++) {
        formData.append("files", files.files[i]);
      }

      fetch("http://localhost:5000/signup", {
        method: "post",
        body: formData,
      })
        .then(async (res) => {
          const data = await res.json();

          // check for error response
          if (!res.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            alert(error);
            return Promise.reject(error);
          }

          var close = document.getElementsByClassName("closebtn");

          // Get the parent of <span class="closebtn"> (<div class="alert">)
          var div = close[0].parentElement;

          // Set the opacity of div to 1 (transparent)
          div.style.opacity = "1";

          // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
          div.style.display = "block";
          location.href = "#alert-success";

          close[0].onclick = function () {
            // Get the parent of <span class="closebtn"> (<div class="alert">)
            var div = this.parentElement;

            // Set the opacity of div to 0 (transparent)
            div.style.opacity = "0";

            // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
            setTimeout(function () {
              div.style.display = "none";
            }, 600);
          };
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });

       
      // this.$router.push("/")
    },

      
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  margin-bottom: 20px;
}

.header-title {
  width: 280px;
  margin-left: 235px;
  text-transform: uppercase;
  letter-spacing: 0.35rem;
  line-height: 2.5;
  display: inline-block;
  color: #0b6ba8;
  border-bottom: 4px solid #0b6ba8;
}

.heading-3 {
  font-weight: 400;
  margin: 20px 50px 20px 20px;
}

h2 {
  margin: 20px 0px;
}

label {
  font-size: 16px;
  color: #0b6ba8;
  display: block;
  font-weight: 600;
}

.label-pj {
  margin: 20px 0px;
}

span {
  color: red;
}

.form-container {
  display: flex;
  flex-flow: column wrap;
  /* width: 500px; */

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

.block {
  color: #0b6ba8;
  display: block;
  width: 400px;

  margin: 40px;
}

.block h3 {
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

input[type="file"] {
  width: 100%;
}

input[type="file"]::-webkit-file-upload-button {
  background-color: #0b6ba8;
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

.layout {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.upload-container {
  margin-right: 250px;
  width: 500px;
  color: black;
}

.list-file {
  padding: 5px;
}

.file-item {
  display: flex;
  justify-content: space-evenly;
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;
}

.oeil {
  width: 20px;
  display: inline-block;
  cursor: pointer;
}

.captcha {
  margin-top: 50px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

#output {
  width: 400px;
  object-fit: cover;
}

.cross {
  font-size: 16px;
  cursor: pointer;
  display: block;
}

button {
  background-color: #0b6ba8;
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
  cursor: pointer;
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

/* The alert message box */
.alert {
  padding: 20px;
  background-color: #f44336;
  color: white;
  opacity: 0.83;
  transition: opacity 0.6s;
  margin-bottom: 15px;
  display: none;
  margin: 20px 0;
}

.alert.success {
  background-color: #04aa6d;
}

.closebtn {
  padding-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 20px;
  line-height: 18px;
  cursor: pointer;
  transition: 0.3s;
}

/* The close button */
.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

/* When moving the mouse over the close button */
.closebtn:hover {
  color: black;
}
</style>
