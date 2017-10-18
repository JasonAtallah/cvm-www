import sessionApi from '../api/session';

const state = {
  auth: {
    accessToken: null,
    idToken: null,
    expiresAt: null,
    webAuth: null
  },
  mgmtApi: {
    host: null
  },
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
    const expiresAt = JSON.parse(state.auth.expiresAt);
    return new Date().getTime() < expiresAt;
  }
};

const actions = {

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
    state.auth.accessToken = session.auth.accessToken;
    state.auth.idToken = session.auth.idToken;
    state.auth.expiresAt = JSON.stringify((session.auth.expiresIn * 1000) + new Date().getTime());
    state.auth.webAuth = new auth0.WebAuth({
      domain: session.auth.domain,
      clientID: session.auth.clientId,
      redirectUri: session.auth.redirectUri,
      audience: session.auth.audience,
      responseType: 'token id_token',
      scope: session.auth.scope,
      leeway: 60
    });
    Object.assign(state.mgmtApi, session.mgmtApi);
  },

  setProfile(state, profile) {
    state.profile.firstName = profile.given_name;
    state.profile.lastName = profile.family_name;
    state.profile.pictureUrl = profile.picture;
    state.profile.loaded = true;
  }

};

export default {
  state,
  getters,
  actions,
  mutations
};
