import sessionApi from '../../../api/session';

export const init = ({ dispatch }) => {
  return dispatch('loadSession');
};

export const loadSession = ({ commit, state }) => {
  return new Promise((res, rej) => {
    sessionApi.load((session) => {
      commit('setSession', session);
      res();
    });
  });
};

export const getProfile = ({ getters, commit, state }) => {
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
};
