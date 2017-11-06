import Vue from 'vue';
import Vuex from 'vuex';

import state from './module/state';
import * as getters from './module/getters';
import * as mutations from './module/mutations';
import * as actions from './module/actions';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state,
  getters,
  actions,
  mutations
});
