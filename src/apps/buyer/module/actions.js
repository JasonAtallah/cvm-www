import api from './api';
import { genVendorUrl } from '../../../lib/data';

export const approveVendor = ({ commit }, { vendor, email }) => {
  return api.approveVendor(vendor, email, genVendorUrl(vendor))
    .then((vendorItem) => {
      commit('updateVendorItem', vendorItem);
      commit('cancelPendingAction');
    });
};

export const cancelMeeting = ({ commit }, { vendor }) => {
  return api.cancelMeeting(vendor)
    .then(() => {
      commit('cancelPendingAction');
    });
};

export const createCalendarEvent = ({ dispatch, commit }, values) => {
  return api.createCalendarEvent(values)
    .then((calendarEvent) => {
      commit('addCalendarEventToList', calendarEvent);
      commit('cancelPendingAction');
    });
};

export const createGCalendar = ({ rootState, commit }, name) => {
  const values = {
    name,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  };

  return api.setGCalendar(values)
    .then((calendar) => {
      commit('gCalendar', calendar);
    });
};

export const createLocation = ({ dispatch, commit }, values) => {
  return api.createLocation(values)
    .then((location) => {
      commit('addLocationToList', location);
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
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return api.getEvents(timezone)
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

export const logout = () => {
  return api.logout();
};

export const overrideDetail = ({ commit, dispatch }, value) => {
  if (value.vendor) {
    dispatch('selVendor', value.vendor)
      .then(() => {
        commit('overrideDetail', Object.assign({ type: value.action.value }, _.omit(value, 'action')));
      });
  } else {
    commit('overrideDetail', Object.assign({ type: value.action.value }, _.omit(value, 'action')));
  }
};

export const rejectVendor = ({ commit }, { vendor, email }) => {
  return api.rejectVendor(vendor, email)
    .then((vendorItem) => {
      commit('updateVendorItem', vendorItem);
      commit('cancelPendingAction');
    });
};

export const saveSchedule = ({ rootState, commit }) => {
  return api.saveSchedule(rootState.buyer.schedule)
    .then((vendors) => {
      commit('setSchedule', false);
    });
};

export const selVendor = ({ rootState, commit }, vendor) => {
  if (!vendor) {
    commit('selVendor', null);
    return Promise.resolve();
  }

  const cachedVendor = rootState.vendors[vendor._id];
  let vendorDetailP;

  if (cachedVendor) {
    vendorDetailP = Promise.resolve(cachedVendor);
  } else {
    vendorDetailP = api.getVendor(vendor)
      .then((vendorDetail) => {
        commit('cacheVendorDetail', vendorDetail);
        return vendorDetail;
      });
  }

  return vendorDetailP
    .then((vendorDetail) => {
      commit('selVendor', vendorDetail);
      commit('cancelDetailOverride');
    });
};

export const sendTimes = ({ commit }, { vendor, suggestedTimes }) => {
  return api.sendTimes(vendor, suggestedTimes, genVendorUrl(vendor))
    .then((vendorItem) => {
      commit('updateVendorItem', vendorItem);
      commit('cancelDetailOverride');
    });
};

export const setGCalendar = ({ rootState, commit }, values) => {
  return api.setGCalendar(values)
    .then((calendar) => {
      commit('gCalendar', calendar);
    });
};

export const updateBuyerProfile = ({ rootState, commit }, profile) => {
  return api.updateBuyerProfile(profile)
    .then(() => {
      commit('buyerProfile', profile);
      commit('cancelPendingAction');
    });
};

export const updateBuyerEmailTemplate = ({ rootState, commit }, { templateId, email }) => {
  return api.updateBuyerEmailTemplate(templateId, email);
};

export const updateThreadAttribute = ({ commit }, { vendor, action }) => {
  return api.updateThreadAttribute(vendor, action);
};
