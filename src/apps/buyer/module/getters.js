import { stateNameForDisplay } from '../../../lib/filters';

export const buyer = state => state.buyer;
export const calendars = state => state.calendars;
export const events = state => state.events;
export const needSetCalendar = (state, getters, rootState, rootGetters) => {
  return state.buyer && !state.buyer.gcalendar;
};
export const pageMenuItems = state => state.pageMenuItems;
export const pendingAction = state => state.pendingAction;
export const schedule = state => state.buyer.schedule;
export const selVendor = state => state.selVendor;
export const setSchedule = state => state.setSchedule;
export const sortedVendors = (state) => {
  let vendors = [...state.vendorList];

  // if (state.vendorFilter.productType) {
  //   const productType = state.vendorFilter.productType.split(' ').shift().toLowerCase();
  //   vendors = vendors.filter((vendor) => {
  //     return vendor[productType].products.length > 0;
  //   });
  // }

  if (state.vendorFilter.status) {
    vendors = vendors.filter((vendor) => {
      return vendor.state.name === state.vendorFilter.status;
    });
  }

  if (state.vendorFilter.searchTerm) {
    const searchTerm = state.vendorFilter.searchTerm.toLowerCase();
    vendors = vendors.filter((vendor) => {
      return vendor.name.toLowerCase().indexOf(searchTerm) >= 0;
    });
  }

  vendors.sort(state.vendorFilter.sort.sortFn);

  return vendors;
};

export const statusOptions = (state) => {
  const statuses = new Set();
  state.vendorList.forEach((vendor) => {
    statuses.add(vendor.state.name);
  });
  return Array.from(statuses).map((status) => {
    return {
      value: status,
      label: stateNameForDisplay(status)
    };
  });
};
export const vendorList = state => state.vendorList;
export const vendors = state => state.vendors;
export const vendorActions = state => state.vendorActions;
export const vendorFilter = state => state.vendorFilter;
