import appOptions from '../metadata/appOptions';
import pages from '../metadata/pages';
import settingsTabs from '../metadata/settingsTabs';
import vendorActionButtons from '../metadata/vendorActionButtons';
import vendorProductTypes from '../metadata/vendorProductTypes';
import vendorSorts from '../metadata/vendorSorts';

export default {
  appOptions,
  buyer: null,
  buyerSettings: {
    settingsTabs,
    activeTab: 'profile'
  },
  calendars: null,
  events: [],
  initP: null,
  overridingDetail: null,
  pageMenuItems: pages,
  pendingAction: {
    type: null
  },
  questionnaire: null,
  selCalendarDate: null,
  selVendor: null,
  setSchedule: false,
  settings: null,
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
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
