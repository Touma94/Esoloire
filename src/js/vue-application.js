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
      const res3 = await axios.get("http://localhost:5000/me");
      console.log(res3.data);
      this.user = res3.data;
      this.isConnected = true;
    } catch (err) {
      // if (err.response && err.response.statusCode === 401) {
      if (err.response?.status === 401) {
        this.isConnected = false;
      } else {
        console.log("error", err);
      }
    }
  },
  methods: {
    async connexion(user) {
      const formData = new FormData();
      formData.append("email", user.email);
      formData.append("password", user.password);

      const res = await axios.post("http://localhost:5000/login", formData);

      if (res.data.isvalidated) {
        this.user = res.data;
        this.isConnected = true;

        if (this.user.isadmin) this.$router.push("/admin");
        else this.$router.push("/voter");
      } else
        alert(
          "Votre compte utilisateur n'a pas encore été validé par l'administrateur. Veuillez attendre le mail de validation."
        );
    },

    async logout() {
      await axios.delete("http://localhost:5000/logout");
      this.isConnected = false;
      this.$router.push("/");
    },
  },
}).$mount("#app");
