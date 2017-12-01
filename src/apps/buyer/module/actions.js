import api from './api';

export const createCalendarEvent = ({ dispatch, commit }, values) => {
  return api.createCalendarEvent(values)
    .then((calendarEvent) => {
      commit('addCalendarEventToList', calendarEvent);
      commit('cancelPendingAction');
    });
};

export const createVendor = ({ dispatch, commit }, values) => {
  return api.createVendor(values)
    .then((vendor) => {
      commit('addVendorToList', vendor);
      commit('cancelPendingAction');
    });
};

export const init = ({ dispatch }) => {
  return Promise.all([
    dispatch('loadSession'),
    dispatch('loadBuyer')
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
    })
    .catch((err) => {
      if (err.status === 404) {
        commit('setGCalendar', null);
      }
    });
};

export const loadVendors = ({ rootState, commit }) => {
  return api.getVendors()
    .then((vendors) => {
      commit('setVendors', vendors);
    });
};

export const performVendorAction = ({ commit }, { vendor, action, email }) => {
  if (action === 'approveVendor') {
    return api.approveVendor(vendor, email)
      .then((result) => {
        commit('updateVendor', {
          vendor,
          values: result
        });
        commit('cancelPendingAction');
      });
  } else if (action === 'rejectVendor') {
    return api.rejectVendor(vendor, email)
      .then((result) => {
        commit('updateVendor', {
          vendor,
          values: result
        });
        commit('cancelPendingAction');
      });
  }
  return Promise.reject(new Error(`Invalid Action: ${action}`));
};

export const updateBuyerEmailTemplate = ({ rootState, commit }, { templateId, email }) => {
  return api.updateBuyerEmailTemplate(templateId, email);
};

export const setGCalendar = ({ rootState, commit }, calendar) => {
  return api.setGCalendar(calendar)
    .then((calendar) => {
      commit('setGCalendar', calendar);
    });
};
