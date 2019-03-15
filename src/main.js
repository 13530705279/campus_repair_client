import Vue from 'vue'
import App from './App.vue'
import './cube-ui';
import 'amfe-flexible'
import store from './store'
import router from './router';
import axios from 'axios';
import './assets/style/reset.scss';
import "./assets/style/mixin.scss";
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
