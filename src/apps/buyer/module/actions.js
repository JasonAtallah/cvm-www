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
    dispatch('loadBuyer'),
    dispatch('loadVendors')
  ]);
};

export const loadBuyer = ({ commit, state }) => {
  return api.loadBuyer()
    .then((buyer) => {
      commit('buyer', buyer);
    });
};

export const loadCalendars = ({ rootState, commit }) => {
  return api.getCalendars()
    .then((calendars) => {
      commit('calendars', calendars);
    });
};

export const loadEvents = ({ rootState, commit }) => {
  return api.getEvents()
    .then((events) => {
      commit('events', events);
    })
    .catch((err) => {
      if (err.status === 404) {
        commit('gCalendar', null);
      }
    });
};

export const loadVendors = ({ rootState, commit }) => {
  return api.getVendors()
    .then((vendorList) => {
      commit('vendorList', vendorList);
    });
};

export const performVendorAction = ({ commit }, { vendor, action, email }) => {
  if (action === 'approveVendor') {
    const params = Object.assign({}, email, {
      scheduleUrl: window.location.href.replace('#', `?vid=${vendor._id}#`)
    });

    return api.approveVendor(vendor, params)
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
  } else if (action === 'scheduleTime') {
    return api.sendApptTimes(vendor, email)
    .then(() => {
      commit('cancelPendingAction');
    });
  }
  return Promise.reject(new Error(`Invalid Action: ${action}`));
};

export const saveSchedule = ({ rootState, commit }) => {
  return api.saveSchedule(rootState.buyer.schedule)
    .then((vendors) => {
      commit('setSchedule', false);
    });
};

export const selVendor = ({ rootState, commit }, vendor) => {
  const cachedVendor = rootState.vendors[vendor._id];
  let vendorDetailP;

  if (cachedVendor) {
    vendorDetailP = Promise.resolve(cachedVendor);
  } else {
    vendorDetailP = api.getVendor(vendor);
  }

  return vendorDetailP
    .then((vendorDetail) => {
      commit('selVendor', vendorDetail);
      commit('cacheVendorDetail', vendorDetail);
    });
};

export const setGCalendar = ({ rootState, commit }, calendar) => {
  return api.setGCalendar(calendar)
    .then((calendar) => {
      commit('gCalendar', calendar);
    });
};

export const updateBuyerEmailTemplate = ({ rootState, commit }, { templateId, email }) => {
  return api.updateBuyerEmailTemplate(templateId, email);
};

export const watchVendor = ({ commit }, { vendor, action }) => {
  if (action.value === 'watchVendor') {
    return api.watchVendor(vendor);
  } else if (action === 'unwatchVendor') {
    return api.unwatchVendor(vendor);
  }

  return Promise.reject(new Error(`Invalid Action: ${action}`));
};
