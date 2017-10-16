import Vue from 'vue';
import Vuex from 'vuex';
import vendors from './vendors';
import session from './session';

Vue.use(Vuex);

const state = {
  initP: null
};

const actions = {

  init({ dispatch }) {
    return dispatch('loadSession')
      .then(() => {
        return dispatch('getProfile');
      });
  }
};

const mutations = {

  setInitP(state, promise) {
    state.initP = promise;
  }

};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    session,
    vendors
  }
});
