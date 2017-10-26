import Vue from 'vue';
import Vuex from 'vuex';
import buyer from './modules/buyer';
import session from './modules/session';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    session,
    buyer
  }
});
