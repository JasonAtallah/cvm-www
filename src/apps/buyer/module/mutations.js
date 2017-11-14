export const setBuyer = (state, buyer) => {
  state.buyer = buyer;
};

export const setCalendars = (state, calendars) => {
  state.calendars = _.sortBy(calendars, 'name');
};

export const setGCalendar = (state, gcalendar) => {
  state.buyer.gcalendar = gcalendar;
};

export const setEvents = (state, events) => {
  state.events = events;
};

export const setProductFilter = (state, value) => {
  state.vendorFilter.productType = value;
};

export const setStatusFilter = (state, value) => {
  state.vendorFilter.status = value;
};

export const setSelVendor = (state, vendor) => {
  state.selVendor = vendor;
};

export const setSession = (state, session) => {
  Object.assign(state.profile, session.profile);
};

export const setVendors = (state, vendors) => {
  state.vendors = vendors;
};

export const setVendorSort = (state, value) => {
  state.vendorFilter.sort = value;
};

export const updateVendor = (state, params) => {
  Object.assign(params.vendor, params.values);
};
