import sessionApi from '../../api/session';

const state = {
  profile: {
    loaded: false,
    firstName: null,
    lastName: null,
    pictureUrl: null
  }
};

const getters = {
  auth: state => state.auth,
  isAuthenticated: (state) => {
    if (!state.auth) return false;
    const expiresAt = JSON.parse(state.auth.expiresAt);
    return new Date().getTime() < expiresAt;
  }
};

const actions = {

  init({ dispatch }) {
    return dispatch('loadSession');
  },

  loadSession({ commit, state }) {
    return new Promise((res, rej) => {
      sessionApi.load((session) => {
        commit('setSession', session);
        res();
      });
    });
  },

  getProfile({ getters, commit, state }) {
    return new Promise((res, rej) => {
      if (state.profile.loaded) {
        res(state.profile);
      } else if (!getters.isAuthenticated) {
        rej('not authenticated');
      } else {
        sessionApi.getProfile(state.auth.webAuth.client, state.auth.accessToken, (err, profile) => {
          if (err) {
            rej(err);
          } else {
            commit('setProfile', profile);
            res(profile);
          }
        });
      }
    });
  }

};

const mutations = {

  setSession(state, session) {
    state.profile.firstName = session.profile.givenName;
    state.profile.lastName = session.profile.familyName;
    state.profile.pictureUrl = session.profile.imageUrl;
    state.profile.loaded = true;
  }

};

export default {
  state,
  getters,
  actions,
  mutations
};
