
const Home = window.httpVueLoader('../components/Home.vue')
const Inscription = window.httpVueLoader('../components/Inscription.vue')
const Connexion = window.httpVueLoader('../components/Connexion.vue')
const Aide = window.httpVueLoader('../components/Aide.vue')
const Resultat = window.httpVueLoader('../components/Resultat.vue')
const Voter = window.httpVueLoader('../components/Voter.vue')
const Admin = window.httpVueLoader('../components/Admin.vue')
const routes = [
    { path: '/', component: Home },
    { path: '/inscription', component: Inscription },
    { path: '/connexion', component: Connexion },
    { path: '/aide', component: Aide },
    { path: '/resultat', component: Resultat },
    { path: '/voter', component: Voter },
    { path: '/admin', component: Admin }
];

console.log(routes)

const router = new VueRouter({
    routes: routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active"

})

var app = new Vue({
    router,
    el: '#app',

}).$mount('#app');