export const calendars = state => state.calendars;
export const events = state => state.events;

export const needSetCalendar = (state, getters, rootState, rootGetters) => {
  return state.buyer && !state.buyer.gcalendar;
};
export const profile = state => state.profile;
export const productTypes = (state) => {
  return [...state.vendors.reduce((types, vendor) => {
    if (Array.isArray(vendor.products)) {
      vendor.products.forEach(p => types.add(p.type));
    }
    return types;
  }, new Set())];
};
export const statuses = (state) => {
  return ['All', 'Accepted', 'Rejected'];
};

export const selVendor = state => state.selVendor;
export const sortedVendors = (state) => {
  let vendors = [...state.vendors];

  if (state.vendorFilter.productType) {
    vendors = vendors.filter((vendor) => {
      if (!vendor.products) {
        return false;
      }
      return vendor.products.map(p => p.type).indexOf(state.vendorFilter.productType) >= 0;
    });
  }

  if (state.vendorFilter.status && state.vendorFilter.status !== 'All') {
    const status = state.vendorFilter.status.toLowerCase();
    vendors = vendors.filter((vendor) => {
      return vendor.status !== null && vendor.status.toLowerCase() === status;
    });
  }

  vendors.sort(state.vendorFilter.selectedSort.sortFn);

  return vendors;
};

export const vendors = state => state.vendors;
export const vendorFilter = state => state.vendorFilter;
export const vendorActions = state => state.vendorActions;
