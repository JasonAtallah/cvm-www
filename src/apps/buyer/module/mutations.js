export const addCalendarEventToList = (state, calendarEvent) => {
  state.events.push(calendarEvent);
};

export const addLocationToList = (state, location) => {
  state.buyer.locations.push(location);
};

export const addVendorToList = (state, vendor) => {
  state.vendorList.push(vendor);
};

export const buyer = (state, buyer) => {
  state.buyer = buyer;
};

export const buyerEmails = (state, emails) => {
  state.buyer.emails = emails;
};

export const buyerProfile = (state, profile) => {
  state.buyer.profile = profile;
};

export const cacheVendorDetail = (state, vendorDetail) => {
  state.vendors[vendorDetail._id] = vendorDetail;
};

export const calendars = (state, calendars) => {
  state.calendars = _.sortBy(calendars, 'name');
};

export const cancelPendingAction = (state) => {
  state.pendingAction = {
    type: null
  };
};

export const cancelDetailOverride = (state) => {
  state.overridingDetail = null;
};

export const events = (state, events) => {
  state.events = events;
};

export const gCalendar = (state, gcalendar) => {
  state.buyer = Object.assign({}, state.buyer, { gcalendar });
};

export const initP = (state, initP) => {
  state.initP = initP;
};

export const notificationInfo = (state, notificationInfo) => {
  state.notificationInfo = notificationInfo;
};

export const overrideDetail = (state, value) => {
  state.overridingDetail = value;
};

export const productFilter = (state, value) => {
  state.vendorFilter.productType = value;
};

export const questionnaire = (state, questionnaire) => {
  state.questionnaire = questionnaire;
};

export const scheduleAdd = (state, value) => {
  if (state.buyer.schedule.indexOf(value) < 0) {
    state.buyer.schedule.push(value);
  }
};

export const scheduleRemove = (state, value) => {
  const index = state.buyer.schedule.indexOf(value);
  if (index >= 0) {
    state.buyer.schedule.splice(index, 1);
  }
};

export const selCalendarDate = (state, value) => {
  state.selCalendarDate = value;
};

export const selSettingTab = (state, settingTab) => {
  state.buyerSettings.activeTab = settingTab;
};

export const selVendor = (state, vendor) => {
  state.selVendor = vendor;
};

export const setSchedule = (state, value) => {
  state.setSchedule = value;
};

export const settings = (state, settings) => {
  state.settings = settings;
};

export const statusFilter = (state, value) => {
  if (value) {
    state.vendorFilter.status = [value];
  } else {
    state.vendorFilter.status = [];
  }
};

export const takeAction = (state, action) => {
  state.pendingAction = action;
};

export const updateVendorItem = (state, vendorItem) => {
  const curVendorItem = state.vendorList.find(i => i._id === vendorItem._id);
  Object.assign(curVendorItem, vendorItem);
};

export const vendorList = (state, vendorList) => {
  state.vendorList = vendorList;
};

export const vendorSearch = (state, value) => {
  state.vendorFilter.searchTerm = value.trim();
};

export const vendorSort = (state, value) => {
  state.vendorFilter.sort = value;
};
