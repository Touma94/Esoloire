const Home = window.httpVueLoader("../components/Home.vue");
const Inscription = window.httpVueLoader("../components/Inscription.vue");
const Connexion = window.httpVueLoader("../components/Connexion.vue");
const Aide = window.httpVueLoader("../components/Aide.vue");
const Resultat = window.httpVueLoader("../components/Resultat.vue");
const Voter = window.httpVueLoader("../components/Voter.vue");
const Admin = window.httpVueLoader("../components/Admin.vue");
const routes = [
  { path: "/", component: Home },
  { path: "/inscription", component: Inscription },
  { path: "/connexion", component: Connexion },
  { path: "/aide", component: Aide },
  { path: "/resultat", component: Resultat },
  { path: "/voter", component: Voter },
  { path: "/admin", component: Admin },
];

console.log(routes);

const router = new VueRouter({
  routes: routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

var app = new Vue({
  router,
  el: "#app",
  data() {
    return {
      user: {},
      isConnected: false,
    };
  },
  async mounted() {
    try {
      const res = await axios.get("http://localhost:5000/me");
      this.user = res.data;
      this.isConnected = true;
    } catch (err) {
      if (err.response?.status === 401) {
        this.isConnected = false;
      } else {
        console.log("error", err);
      }
    }
  },
  methods: {
    connexion(user) {
      const formData = new FormData();
      formData.append("email", user.email);
      formData.append("password", user.password);

      const requestOptions = {
        method: "POST",
        body: formData,
      };
      fetch("http://localhost:5000/login", requestOptions)
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            alert(error);
            return Promise.reject(error);
          }

          console.log(data);
          if (data.isvalidated) {
            this.user = data;
            this.isConnected = true;

            if (this.user.isadmin) this.$router.push("/admin");
            else this.$router.push("/voter");
          } else
            alert(
              "Votre compte utilisateur n'a pas encore été validé par l'administrateur. Veuillez attendre le mail de validation."
            );
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },

    async logout() {
      await axios.delete("http://localhost:5000/logout");
      this.isConnected = false;
      this.$router.push("/");
    },
  },
}).$mount("#app");
