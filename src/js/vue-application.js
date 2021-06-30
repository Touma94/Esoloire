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
    async connexion(user) {
      const res = await axios.post("http://localhost:5000/login", user);
      user.data = res.data;
      if (user.isadmin) this.$router.push("/admin");
      else if (user.isvalidated == "true") this.$router.push("/voter");
      else console.log("user not validated yet");

      if (res.data !== undefined) {
        this.user = res.data;
        this.isConnected = true;
        this.$router.push("/voter");
      }
    },

    async logout() {
      await axios.delete("http://localhost:5000/logout");
      this.isConnected = false;
    },
  },
}).$mount("#app");
