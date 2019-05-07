import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Bot from '../pages/Bot.vue'

Vue.use(VueRouter);



const routes = [
    { path: '/', component: Dashboard },
    { path: '/dashboard', component: Dashboard },
    { path: '/bot', component: Bot }
];

export default new VueRouter({
    mode:'history',
    routes
})