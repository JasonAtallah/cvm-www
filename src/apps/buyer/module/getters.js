export const addCalendarEventModalIsVisible = state => state.addCalendarEventModalIsVisible;
export const buyer = state => state.buyer;
export const calendars = state => state.calendars;
export const events = state => state.events;
export const needSetCalendar = (state, getters, rootState, rootGetters) => {
  return state.buyer && !state.buyer.gcalendar;
};
export const pageMenuItems = state => state.pageMenuItems;
export const pendingAction = state => state.pendingAction;
export const profile = state => state.profile;
export const schedule = state => state.buyer.schedule;
export const selVendor = state => state.selVendor;
export const setSchedule = state => state.setSchedule;
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

  if (state.vendorFilter.searchTerm) {
    const searchTerm = state.vendorFilter.searchTerm.toLowerCase();
    vendors = vendors.filter((vendor) => {
      return vendor.company.name.toLowerCase().indexOf(searchTerm) >= 0;
    });
  }

  vendors.sort(state.vendorFilter.sort.sortFn);

  return vendors;
};
export const vendors = state => state.vendors;
export const vendorActions = state => state.vendorActions;
export const vendorDetailsTab = state => state.vendorDetailsTab;
export const vendorFilter = state => state.vendorFilter;
