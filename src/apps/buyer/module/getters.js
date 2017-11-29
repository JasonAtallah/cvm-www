export const addCalendarEventModalIsVisible = state => state.addCalendarEventModalIsVisible;
export const addVendorModalIsVisible = state => state.addVendorModalIsVisible;
export const calendars = state => state.calendars;
export const events = state => state.events;

export const needSetCalendar = (state, getters, rootState, rootGetters) => {
  return state.buyer && !state.buyer.gcalendar;
};
export const pageMenuItems = state => state.pageMenuItems;
export const profile = state => state.profile;
export const productTypes = (state) => {
  return ['Flowers', 'Edibles & Topicals', 'Concentrates'];
};
export const statuses = (state) => {
  return ['New', 'Approved', 'Rejected'];
};

export const selVendor = state => state.selVendor;
export const showVendorDetailsTab = state => state.showVendorDetailsTab;
export const sortedVendors = (state) => {
  let vendors = [...state.vendors];

  if (state.vendorFilter.productType) {
    const productType = state.vendorFilter.productType.split(' ').shift().toLowerCase();
    vendors = vendors.filter((vendor) => {
      return vendor[productType].products.length > 0;
    });
  }

  if (state.vendorFilter.status) {
    const status = state.vendorFilter.status.toLowerCase();
    vendors = vendors.filter((vendor) => {
      if (status === 'new') {
        return vendor.status === null;
      }

      return vendor.status && vendor.status.toLowerCase() === status;
    });
  }

  vendors.sort(state.vendorFilter.selectedSort.sortFn);

  return vendors;
};

export const vendors = state => state.vendors;
export const vendorFilter = state => state.vendorFilter;
export const vendorActions = state => state.vendorActions;
