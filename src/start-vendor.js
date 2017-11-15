import Vue from 'vue';

import 'bootstrap/dist/css/bootstrap.css';

import VendorApp from './apps/vendor/main';
import VendorRouter from './apps/vendor/router';
import VendorStore from './apps/vendor/store';

Vue.config.productionTip = false;

const vm = new Vue({
  el: '#app',
  router: VendorRouter,
  store: VendorStore,
  template: '<App/>',
  components: {
    App: VendorApp
  }
});
