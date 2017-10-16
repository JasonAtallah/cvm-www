import Vue from 'vue';

import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
});
