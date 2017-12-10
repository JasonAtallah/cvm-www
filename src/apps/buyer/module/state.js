import pages from '../metadata/pages';
import vendorActions from '../metadata/vendorActions';
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
  vendorDetailsTab: 'company',
  vendors: [],
  vendorFilter: {
    productType: null,
    status: null,
    sort: vendorSorts[0],
    sortOptions: vendorSorts,
    statusOptions: vendorStatuses
  },
  vendorActions
};
