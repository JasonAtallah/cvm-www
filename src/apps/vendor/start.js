import Vue from 'vue';

import 'bootstrap/scss/bootstrap.scss';
import 'element-ui/lib/theme-chalk/index.css';

import VendorApp from '@/components/vendor/Main';
import VendorRouter from './router';
import VendorStore from './store';

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
