import pages from '../metadata/pages';
import vendorActions from '../metadata/vendorActions';
import vendorProductTypes from '../metadata/vendorProductTypes';
import vendorSorts from '../metadata/vendorSorts';
import vendorStatuses from '../metadata/vendorStatuses';

export default {
  buyer: null,
  calendars: null,
  events: [],
  gcalendar: null,
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
    sortOptions: vendorSorts,
    statusOptions: vendorStatuses
  },
  vendorActions
};
