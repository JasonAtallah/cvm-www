import { Notification } from 'element-ui';
import api from './api';
import router from '../router';
import { genVendorUrl } from '../../../lib/data';

export const approveVendor = ({ commit, dispatch }, { vendor, email }) => {
  return api.approveVendor(vendor, email, genVendorUrl(vendor))
    .then((vendorItem) => {
      commit('updateVendorItem', vendorItem);
      commit('cancelDetailOverride');
    });
};

export const cancelMeeting = ({ commit, dispatch }, { vendor }) => {
  return api.cancelMeeting(vendor)
    .then((vendorItem) => {
      commit('updateVendorItem', vendorItem);
      commit('cancelPendingAction');
      commit('cancelDetailOverride');
    });
};

export const createCalendarEvent = ({ rootState, dispatch, commit }, values) => {
  values.timezone = rootState.timezone;

  return api.createCalendarEvent(values)
    .then((calendarEvent) => {
      commit('addCalendarEventToList', calendarEvent);
      commit('cancelDetailOverride');
    });
};

export const createGCalendar = ({ rootState, commit, dispatch }, name) => {
  const values = {
    name,
    timezone: rootState.timezone
  };

  return api.setGCalendar(values)
    .then((calendar) => {
      commit('gCalendar', calendar);
      dispatch('loadEvents');
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
      dispatch('selVendor', vendor);
    });
};

export const init = ({ commit, dispatch }) => {
  const initP = Promise.all([
    dispatch('loadBuyer'),
    dispatch('loadVendors'),
    dispatch('loadQuestionnaire'),
    dispatch('loadSettings'),
    dispatch('loadEvents')
  ]);
  commit('initP', initP);
  return initP;
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
  return api.getEvents(rootState.timezone)
    .then((events) => {
      commit('events', events);
    })
    .catch((err) => {
      if (err.status === 404) {
        commit('gCalendar', null);
      }
    });
};

export const loadQuestionnaire = ({ rootstate, commit }) => {
  return api.getQuestionnaire()
    .then((questionnaire) => {
      commit('questionnaire', questionnaire);
    });
};

export const loadSettings = ({ commit }) => {
  return api.getSettings()
    .then((settings) => {
      commit('settings', settings);
    });
};

export const loadVendors = ({ rootState, commit }, { query } = {}) => {
  return api.getVendors(query)
    .then((vendorList) => {
      commit('vendorList', vendorList);
    });
};

export const logout = () => {
  return api.logout()
    .then(() => {
      window.location.reload();
    });
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

export const rejectVendor = ({ commit, dispatch }, { vendor, email }) => {
  return api.rejectVendor(vendor, email)
    .then((vendorItem) => {
      commit('updateVendorItem', vendorItem);
      commit('cancelDetailOverride');
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

export const sendTimes = ({ commit, dispatch }, { vendor, suggestedTimes }) => {
  return api.sendTimes(vendor, suggestedTimes, genVendorUrl(vendor))
    .then((vendorItem) => {
      commit('updateVendorItem', vendorItem);
      commit('cancelDetailOverride');
    });
};

export const setGCalendar = ({ rootState, commit, dispatch }, values) => {
  return api.setGCalendar(values)
    .then((calendar) => {
      commit('gCalendar', calendar);
      dispatch('loadEvents');
    });
};

export const updateBuyerProfile = ({ rootState, commit, dispatch }, profile) => {
  return api.updateBuyerProfile(profile)
    .then((profile) => {
      commit('buyerProfile', profile);
    });
};

export const updateBuyerEmailTemplate = ({ rootState, commit, dispatch }, { templateId, email }) => {
  return api.updateBuyerEmailTemplate(templateId, email)
    .then((emails) => {
      commit('buyerEmails', emails);
    });
};

export const updateQuestionnaire = ({ rootState, commit }, page) => {
  return api.updateQuestionnaire(page)
    .then((questionnaire) => {
      commit('questionnaire', questionnaire);
    });
};

export const updateThreadAttributes = ({ commit }, { vendor, action }) => {
  const attributes = {
    [action.attribute]: action.value
  };
  return api.updateThreadAttributes(vendor, attributes)
    .then((vendorItem) => {
      commit('updateVendorItem', vendorItem);
    });
};
