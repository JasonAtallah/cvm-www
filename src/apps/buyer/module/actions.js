import buyerApi from './api';

export const init = ({ dispatch }) => {
  return Promise.all([
    dispatch('loadSession'),
    dispatch('loadBuyer'),
    dispatch('loadVendors')
  ]);
};

export const loadBuyer = ({ commit, state }) => {
  return buyerApi.loadBuyer()
    .then((buyer) => {
      commit('setBuyer', buyer);
    });
};

export const loadSession = ({ commit, state }) => {
  return buyerApi.loadSession()
    .then((session) => {
      commit('setSession', session);
    });
};

export const loadCalendars = ({ rootState, commit }) => {
  return buyerApi.getCalendars()
    .then((calendars) => {
      commit('setCalendars', calendars);
    });
};

export const loadEvents = ({ rootState, commit }) => {
  return buyerApi.getEvents()
    .then((events) => {
      commit('setEvents', events);
    });
};

export const loadVendors = ({ rootState, commit }) => {
  return buyerApi.getVendors()
    .then((vendors) => {
      commit('setVendors', vendors);
    });
};

export const setGCalendar = ({ rootState, commit }, calendar) => {
  return buyerApi.setGCalendar(calendar)
    .then((calendar) => {
      commit('setGCalendar', calendar);
    });
};

export const takeVendorAction = ({ commit }, { vendor, action }) => {
  switch (action.label) {
    case 'Approve':
      // eslint-disable-next-line
      console.log('approve vendor');
      break;

    case 'Reject':
      // eslint-disable-next-line
      console.log('reject vendor');
      break;

    default:

  }
};
