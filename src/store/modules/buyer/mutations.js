
export const setVendorSort = (state, value) => {
  state.vendorFilter.sort = value;
};

export const setProductFilter = (state, value) => {
  state.vendorFilter.productType = value;
};

export const setVendors = (state, vendors) => {
  state.vendors = vendors;
};

export const setEvents = (state, events) => {
  state.events = events;
};
