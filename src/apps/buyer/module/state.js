import pages from '../metadata/pages';
import settingsTabs from '../metadata/settingsTabs';
import vendorActionButtons from '../metadata/vendorActionButtons';
import vendorProductTypes from '../metadata/vendorProductTypes';
import vendorSorts from '../metadata/vendorSorts';

export default {
  buyer: null,
  buyerSettings: {
    settingsTabs,
    activeTab: 'profile'
  },
  calendars: null,
  events: [],
  overridingDetail: null,
  pageMenuItems: pages,
  pendingAction: {
    type: null
  },
  selVendor: null,
  setSchedule: false,
  vendors: {},
  vendorActionButtons,
  vendorFilter: {
    productType: null,
    productTypeOptions: vendorProductTypes,
    searchTerm: null,
    status: null,
    sort: vendorSorts[0],
    sortOptions: vendorSorts
  },
  vendorList: []
};
