import pages from '../metadata/pages';
import vendorActions from '../metadata/vendorActions';
import vendorProductTypes from '../metadata/vendorProductTypes';
import vendorSorts from '../metadata/vendorSorts';

export default {
  buyer: null,
  calendars: null,
  events: [],
  pageMenuItems: pages,
  pendingAction: {
    type: null
  },
  selVendor: null,
  setSchedule: false,
  vendorList: [],
  vendors: {},
  vendorFilter: {
    productType: null,
    productTypeOptions: vendorProductTypes,
    searchTerm: null,
    status: null,
    sort: vendorSorts[0],
    sortOptions: vendorSorts
  },
  vendorActions
};
