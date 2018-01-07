import Vue from 'vue';
import en from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/css/font-awesome.css';
import 'element-ui/lib/theme-chalk/index.css';

import BuyerApp from './apps/buyer/main';
import BuyerRouter from './apps/buyer/router';
import BuyerStore from './apps/buyer/store';

Vue.config.productionTip = false;
locale.use(en);

const vm = new Vue({
  el: '#app',
  router: BuyerRouter,
  store: BuyerStore,
  template: '<App/>',
  components: {
    App: BuyerApp
  }
});
