export const addCalendarEventToList = (state, calendarEvent) => {
  state.events.push(calendarEvent);
};

export const addVendorToList = (state, vendor) => {
  state.vendors.push(vendor);
};

export const cancelPendingAction = (state) => {
  state.pendingAction = {
    type: null
  };
};

export const buyer = (state, buyer) => {
  state.buyer = buyer;
};

export const calendars = (state, calendars) => {
  state.calendars = _.sortBy(calendars, 'name');
};

export const gCalendar = (state, gcalendar) => {
  state.buyer.gcalendar = gcalendar;
};

export const events = (state, events) => {
  state.events = events;
};

export const productFilter = (state, value) => {
  state.vendorFilter.productType = value;
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

export const selVendor = (state, vendor) => {
  state.selVendor = vendor;
};

export const session = (state, session) => {
  Object.assign(state.profile, session.profile);
};

export const setSchedule = (state, value) => {
  state.setSchedule = value;
};

export const statusFilter = (state, value) => {
  state.vendorFilter.status = value;
};

export const vendors = (state, vendors) => {
  state.vendors = vendors;
};

export const vendorDetailsTab = (state, detailTab) => {
  state.vendorDetailsTab = detailTab;
};

export const vendorSort = (state, value) => {
  state.vendorFilter.sort = value;
};

export const takeAction = (state, action) => {
  state.pendingAction = action;
};

export const updateVendor = (state, params) => {
  Object.assign(params.vendor, params.values);
};
