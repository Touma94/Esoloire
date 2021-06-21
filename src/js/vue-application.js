
const Home = window.httpVueLoader('../components/Home.vue')
const Inscription = httpVueLoader('../components/Inscription.vue')
const Connexion = httpVueLoader('../components/Connexion.vue')


const routes = [
    { path: '/', component: Home },
    { path: '/inscription', component: Inscription },
    { path: '/connexion', component: Connexion },
];

console.log(routes)

const router = new VueRouter({
    routes: routes,

})

var app = new Vue({
    router,
    el: '#app',

}).$mount('#app');