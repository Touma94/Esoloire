
const Home = window.httpVueLoader('../components/Home.vue')
const Inscription = window.httpVueLoader('../components/Inscription.vue')
const Connexion = window.httpVueLoader('../components/Connexion.vue')


const routes = [
    { path: '/', component: Home },
    { path: '/inscription', component: Inscription },
    { path: '/connexion', component: Connexion },
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