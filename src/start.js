import Vue from 'vue';

import 'bootstrap/dist/css/bootstrap.css';

import BuyerApp from './apps/buyer/main';
import BuyerRouter from './apps/buyer/router';
import BuyerStore from './apps/buyer/store';

Vue.config.productionTip = false;

const vm = new Vue({
  el: '#app',
  router: BuyerRouter,
  store: BuyerStore,
  template: '<App/>',
  components: {
    App: BuyerApp
  }
});
