import Vue from 'vue';
import WebShop from './WebShop.vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import createPersistedState from "vuex-persistedstate";
import WebShopStore from './store';
import routes from './routes';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
    ...WebShopStore,
    plugins: [createPersistedState(
        {
            key: 'web-shop-data',
            fetchBeforeUse: true,
            paths: ['cart']
        }
    )]
});

const router = new VueRouter({mode: 'history', routes});

new Vue({
    render: h => h(WebShop),
    store,
    router
}).$mount('#app');
