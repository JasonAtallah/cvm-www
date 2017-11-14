import api from './api';

export const init = ({ dispatch }) => {
  return Promise.all([
    dispatch('loadSession'),
    dispatch('loadBuyer'),
    dispatch('loadVendors')
  ]);
};

export const loadBuyer = ({ commit, state }) => {
  return api.loadBuyer()
    .then((buyer) => {
      commit('setBuyer', buyer);
    });
};

export const loadSession = ({ commit, state }) => {
  return api.loadSession()
    .then((session) => {
      commit('setSession', session);
    });
};

export const loadCalendars = ({ rootState, commit }) => {
  return api.getCalendars()
    .then((calendars) => {
      commit('setCalendars', calendars);
    });
};

export const loadEvents = ({ rootState, commit }) => {
  return api.getEvents()
    .then((events) => {
      commit('setEvents', events);
    });
};

export const loadVendors = ({ rootState, commit }) => {
  return api.getVendors()
    .then((vendors) => {
      commit('setVendors', vendors);
    });
};

export const setGCalendar = ({ rootState, commit }, calendar) => {
  return api.setGCalendar(calendar)
    .then((calendar) => {
      commit('setGCalendar', calendar);
    });
};

export const takeVendorAction = ({ commit }, { vendor, action }) => {
  if (action.label === 'Approve') {
    return api.approveVendor(vendor)
      .then((result) => {
        commit('updateVendor', {
          vendor,
          values: result
        });
      });
  }

  return api.rejectVendor(vendor)
    .then((result) => {
      commit('updateVendor', {
        vendor,
        values: result
      });
    });
};
