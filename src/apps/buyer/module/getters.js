import { stateNameForDisplay } from '../../../lib/filters';

export const appOptions = state => state.appOptions;
export const buyer = state => state.buyer;
export const buyerSettings = state => state.buyerSettings;
export const calendars = state => state.calendars;
export const events = state => state.events;
export const locations = (state) => {
  const locations = [...state.buyer.locations];
  locations.unshift(state.buyer.profile.company);
  return locations;
};
export const overridingDetail = state => state.overridingDetail;
export const pageMenuItems = state => state.pageMenuItems;
export const pendingAction = state => state.pendingAction;
export const questionnaire = state => state.questionnaire;
export const schedule = state => state.buyer.schedule;
export const selCalendarDate = state => state.selCalendarDate;
export const selVendor = state => state.selVendor;
export const selVendorState = state => state.selVendorState;
export const setSchedule = state => state.setSchedule;
export const settings = state => state.settings;
export const sortedVendors = (state) => {
  let vendors = [...state.vendorList];

  if (state.vendorFilter.status && state.vendorFilter.status.length) {
    vendors = vendors.filter((vendor) => {
      return _.some(state.vendorFilter.status, s => vendor.state.name === s.value);
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
export const vendorActionButtons = state => state.vendorActionButtons;
export const vendorFilter = state => state.vendorFilter;
