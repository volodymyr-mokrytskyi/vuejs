import Vue from 'vue'
import VueResource from 'vue-resource'
import App from 'pages/Main.vue'
import Vuetify from 'vuetify'
import router from 'router/router'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify,{
    theme:{
        primary: '#ff0300'
}});

Vue.use(VueResource);

new Vue({
    el: '#app',
    router,
    render: a => a(App)
});