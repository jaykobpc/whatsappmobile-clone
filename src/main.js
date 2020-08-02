import Vue from 'vue'
import App from './App.vue'
import router from './components/Router/Index';
import store from './Vuex/Store';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
  store,
}).$mount('#app')
