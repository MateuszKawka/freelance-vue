import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import './assets/bulma.scss'
import {auth} from './common/firebase'
import VueFormulate from '@braid/vue-formulate'
import '../node_modules/@braid/vue-formulate/themes/snow/snow.scss';
Vue.use(VueFormulate)
Vue.use(Buefy)
Vue.config.productionTip = false

let app
auth.onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})